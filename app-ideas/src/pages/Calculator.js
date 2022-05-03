import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonsCalculator from '../components/ButtonsCalculator';
import '../styles/calculator.css';

export default class Calculator extends Component {
  render() {
    return (
      <div>
        <Header text="Calculator" show={true} />
        <div className="divCalculator">
          <ButtonsCalculator />
        </div>
        <Footer />
      </div>
    );
  }
}
