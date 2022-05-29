import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {v4 as uuidv4} from 'uuid';
import {sendNewPerson, sendNewPersonToObjPerson} from '../../redux/actions';
import {Button, Group, Text, Center} from '@mantine/core';
import '../../styles/CauseEffect.css';

class CauseEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [...props.persons],
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
          <Center>
            <Group>
              {persons.map((person) => (
                <Link
                  className="colorWhite"
                  onClick={() => this.handleDispatchPerson(person.name)}
                  key={uuidv4()}
                  to={`/cause-effect/especifics/${person.id}`}
                >
                  <Text className="textCauseEffect" lineClamp={4}>
                    {person.name}
                  </Text>
                </Link>
              ))}
            </Group>
          </Center>
          <Center>
            <Button
              className="buttonCauseEffect"
              onClick={this.handleNewPerson}
            >
              Add new Person
            </Button>
          </Center>
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
