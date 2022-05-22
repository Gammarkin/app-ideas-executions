import React, {Component} from 'react';

export default class CauseEffectEspecifics extends Component {
  render() {
    const {persons} = this.props;
    return (
      <div>
        {persons.map((person) => (
          <ul>
            <li>{person.name}</li>
            <li>{person.street}</li>
            <li>{person.city}</li>
            <li>{person.state}</li>
            <li>{person.country}</li>
            <li>{person.telephone}</li>
            <li>{person.birthday}</li>
          </ul>
        ))}
      </div>
    );
  }
}
