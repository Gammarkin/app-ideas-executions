import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

class CauseEffectEspecifics extends Component {
  render() {
    const {person = {}} = this.props;
    return (
      <div>
        <Header text={person.name} show={true} />
        <div>
          <ul>
            <li>{person.name}</li>
            <li>{person.street}</li>
            <li>{person.city}</li>
            <li>{person.state}</li>
            <li>{person.country}</li>
            <li>{person.telephone}</li>
            <li>{person.birthday}</li>
          </ul>
        </div>
        <Link to="/cause-effect">
          <p>back to all persons</p>
        </Link>
        <Footer />
      </div>
    );
  }
}

export default CauseEffectEspecifics;
