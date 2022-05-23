import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ModifyPerson} from '../actions';

class CauseEffectEspecifics extends Component {
  constructor(props) {
    super(props);

    const STARTER_OBJ = {
      name: '',
      street: '',
      city: '',
      state: '',
      country: '',
      telephone: '',
      birthday: '',
    };

    this.state = {
      personFromState: props.person ? {...props.person} : {...STARTER_OBJ},
      newPersonsArray: [props.persons],
    };
  }

  handleChangePersonValue = ({target: {name, value}}) => {
    const {personFromState} = this.state;
    this.setState({
      personFromState: {
        ...personFromState,
        [name]: value,
      },
    });
  };

  handleDispatchChangedPersonData = () => {
    const {dispatch, persons} = this.props;
    const {personFromState} = this.state;

    const filteredPersons = persons.filter(
      (person) => person.id !== personFromState.id
    );
    const newPersonsArray = [...filteredPersons, personFromState];
    dispatch(ModifyPerson(newPersonsArray));
  };

  render() {
    const {personFromState = {}} = this.state;
    return (
      <div>
        <Header text={personFromState.name} show={true} />
        <div>
          <input
            onChange={this.handleChangePersonValue}
            name="name"
            value={personFromState.name}
          />

          <input
            onChange={this.handleChangePersonValue}
            value={personFromState.street}
            name="street"
          />

          <input
            onChange={this.handleChangePersonValue}
            name="city"
            value={personFromState.city}
          />

          <input
            onChange={this.handleChangePersonValue}
            name="state"
            value={personFromState.state}
          />

          <input
            onChange={this.handleChangePersonValue}
            value={personFromState.country}
            name="country"
          />

          <input
            onChange={this.handleChangePersonValue}
            value={personFromState.telephone}
            name="telephone"
          />

          <input
            onChange={this.handleChangePersonValue}
            value={personFromState.birthday}
            name="birthday"
          />

          <Link to="/cause-effect">
            <button
              type="button"
              onClick={this.handleDispatchChangedPersonData}
            >
              Modify this Person
            </button>
          </Link>

          <Link to="/cause-effect">
            <p>back to all persons</p>
          </Link>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({causeEffectR: {person, persons}}) => ({
  person,
  persons,
});

export default connect(mapStateToProps)(CauseEffectEspecifics);
