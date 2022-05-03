import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonsCalculator from '../components/ButtonsCalculator';
import '../styles/calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      currOperator: '',
      prevOperator: '',
      prevOperand: '',
      currOperand: '',
    };
  }

  handleInput = ({target}) => {
    const {value} = target;
    this.setState({display: value});
  };

  handleChangeDisplay = ({target}) => {
    const allNumbers = document.getElementsByClassName('number');
    const arr = [...allNumbers].map((number) => number.innerText);
    const clickedNumber = arr.find((number) => number === target.innerText);

    this.setState((prev) => ({
      display: prev.display + clickedNumber,
      currOperand: clickedNumber,
      prevOperand: prev.currOperand,
    }));
  };

  handleOperators = ({target}) => {};

  handleErase = ({target}) => {
    const {innerText} = target;
    if (innerText === 'CE') {
      this.setState({
        display: '',
        currOperator: '',
        prevOperator: '',
        prevOperand: '',
        currOperand: '',
      });
    }
    if (innerText === 'C') {
      const {display} = this.state;
      this.setState({
        currOperand: '',
        display: display.slice(0, display.length - 1),
      });
    }
  };

  render() {
    const {display} = this.state;
    return (
      <div>
        <Header text="Calculator" show={true} />
        <div className="divCalculator">
          <ButtonsCalculator
            handleInput={this.handleInput}
            handleChangeDisplay={this.handleChangeDisplay}
            handleErase={this.handleErase}
            display={display}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
