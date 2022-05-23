import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {v4 as uuidv4} from 'uuid';
import {sendNewPerson, sendNewPersonToObjPerson} from '../actions';
import {Button} from '@mantine/core';

const fakeStarterPerson = {
  id: 0,
  name: 'Juan Luna Fernandez',
  street: 'Heart of the moon st.',
  city: 'LoveCity',
  state: 'HeartState',
  country: 'LoveLand',
  telephone: '80085-80085',
  birthday: '04/20/1969',
};

class CauseEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [fakeStarterPerson],
    };
  }

  handleDispatchPerson = (personName) => {
    const {dispatch} = this.props;
    const {persons} = this.state;

    const desiredPerson = persons.find((person) => person.name === personName);
    dispatch(sendNewPersonToObjPerson(desiredPerson));
  };

  handleNewPerson = () => {
    const {dispatch} = this.props;
    const {persons} = this.state;

    const emptyPersonObj = {
      id: persons.length,
      name: 'edit me into a new person',
      street: '',
      city: '',
      state: '',
      country: '',
      telephone: '',
      birthday: '',
    };

    dispatch(sendNewPerson(emptyPersonObj));
  };

  render() {
    const {persons} = this.props;
    return (
      <div>
        <Header text="Cause Effect" show={true} />
        <div>
          {persons.map((person) => (
            <Link
              onClick={() => this.handleDispatchPerson(person.name)}
              key={uuidv4()}
              to={`/cause-effect/especifics/${person.id}`}
            >
              <p>{person.name}</p>
            </Link>
          ))}
          <Button onClick={this.handleNewPerson}>Add new Person</Button>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({causeEffectR: {persons, person}}) => ({
  persons,
  person,
});

export default connect(mapStateToProps)(CauseEffect);
