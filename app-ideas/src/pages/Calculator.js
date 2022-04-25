import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Calculator extends Component {
  render() {
    return (
      <div>
        <Header text="Calculator" show={true} />
        <div></div>
        <Footer />
      </div>
    );
  }
}
