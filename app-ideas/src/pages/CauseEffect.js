import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

const randomIdForFakeStarterPerson = uuidv4();
const fakeStarterPerson = {
  id: randomIdForFakeStarterPerson,
  name: 'Juan Luna Fernandez',
  street: 'Heart of the moon st.',
  city: 'LoveCity',
  state: 'HeartState',
  country: 'LoveLand',
  telephone: '80085-80085',
  birthday: '04/20/1969',
};

export default class CauseEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [fakeStarterPerson],
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
            <Link key={uuidv4()} to={`/cause-effect/especifics/${person.id}`}>
              <p>{person.name}</p>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
