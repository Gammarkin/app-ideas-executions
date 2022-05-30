import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ModifyPerson} from '../../redux/actions';
import {Button, TextInput, Center} from '@mantine/core';
import '../../styles/CauseEffectEspecifics.css';

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

  handleChangePersonValue = (event) => {
    event.preventDefault();

    const {
      target: {name, value},
    } = event;

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
        <div className="flexCauseEffectsExp">
          <TextInput
            className="textInputCauseEffect"
            onChange={this.handleChangePersonValue}
            name="name"
            value={personFromState.name}
            placeholder="Your name"
            label="Name"
            radius="md"
            size="md"
          />

          <TextInput
            className="textInputCauseEffect"
            onChange={this.handleChangePersonValue}
            value={personFromState.street}
            name="street"
            placeholder="Your street"
            label="Street"
            radius="md"
            size="md"
          />

          <TextInput
            className="textInputCauseEffect"
            onChange={this.handleChangePersonValue}
            name="city"
            value={personFromState.city}
            placeholder="Your city"
            label="City"
            radius="md"
            size="md"
          />

          <TextInput
            className="textInputCauseEffect"
            onChange={this.handleChangePersonValue}
            value={personFromState.state}
            name="state"
            placeholder="Your state"
            label="State"
            radius="md"
            size="md"
          />

          <TextInput
            className="textInputCauseEffect"
            onChange={this.handleChangePersonValue}
            value={personFromState.country}
            name="country"
            placeholder="Your country"
            label="Country"
            radius="md"
            size="md"
          />

          <TextInput
            className="textInputCauseEffect"
            onChange={this.handleChangePersonValue}
            value={personFromState.telephone}
            name="telephone"
            placeholder="Your telephone"
            label="Telephone"
            radius="md"
            size="md"
          />

          <TextInput
            variant="filled"
            className="textInputCauseEffect"
            onChange={this.handleChangePersonValue}
            value={personFromState.birthday}
            name="birthday"
            placeholder="Your birthday"
            label="Birthday"
            radius="md"
            size="md"
          />
        </div>
        <Center style={{flexDirection: 'column'}}>
          <Link to="/cause-effect">
            <Button
              className="buttonCauseEffect"
              type="button"
              onClick={this.handleDispatchChangedPersonData}
            >
              Modify this Person
            </Button>
          </Link>
          <Link className="colorWhite" to="/cause-effect">
            <p>back to all persons</p>
          </Link>
        </Center>
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
