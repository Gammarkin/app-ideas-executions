import React, {Component} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class ColorCycle extends Component {
  render() {
    return (
      <div>
        <Header text="Color Cycle" show={true} />
        <form></form>
        <Footer />
      </div>
    );
  }
}
