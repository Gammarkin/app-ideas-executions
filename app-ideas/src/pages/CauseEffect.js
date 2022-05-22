import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

const fakeStarterPerson = [
  {
    name: '...',
    street: '...',
    city: '...',
    state: '...',
    country: '...',
    telephone: '...',
    birthday: '...',
  },
];

export default class CauseEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: fakeStarterPerson,
      person: [],
    };
  }

  handleNewPerson = () => {};

  // fazer a store amanhã. Fazer dowload do redux, react-redux e do configureStore.
  // só passar as pessoas todas pela store, e depois pegar e filtrar por nome

  render() {
    const {persons} = this.state;
    return (
      <div>
        <Header text="Cause Effect" show={true} />
        <div>
          {persons.map((person) => (
            <Link to={`/cause-effect/expecifics/${person.name}`}>
              <p>{person.name}</p>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
