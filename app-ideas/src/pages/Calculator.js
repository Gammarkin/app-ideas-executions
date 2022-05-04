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
      operator: '',
      prevOperand: '',
      currOperand: '',
      firstNumber: undefined,
      otherNumber: undefined,
      clickedPar: false,
      clickedNegative: false,
      clickedDot: false,
      error: false,
      errorMsg: '',
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

    const {operator, firstNumber} = this.state;

    if (operator && firstNumber) {
      this.setState((prev) => ({
        display: prev.display + clickedNumber,
        currOperand: clickedNumber,
        prevOperand: prev.currOperand,
        otherNumber: prev.display + clickedNumber,
      }));
    } else {
      this.setState((prev) => ({
        display: prev.display + clickedNumber,
        currOperand: clickedNumber,
        prevOperand: prev.currOperand,
        firstNumber: prev.display + clickedNumber,
      }));
    }
  };

  handleParenthesis = () => {
    const {display, clickedPar} = this.state;

    if (clickedPar) {
      this.setState({
        display: display + ')',
        clickedPar: false,
      });
    } else {
      this.setState({
        display: display + '(',
        clickedPar: true,
      });
    }
  };

  handleNegative = () => {
    const {display, clickedNegative} = this.state;
    if (clickedNegative) {
      this.setState({
        display: display.replaceAll('-', ''),
        clickedNegative: false,
      });
    } else {
      this.setState({
        display: '-' + display,
        clickedNegative: true,
      });
    }
  };

  handleDot = () => {
    const {display, clickedDot} = this.state;
    if (!clickedDot && display) {
      this.setState({
        display: display + '.',
        clickedDot: true,
      });
    }
  };

  handleOperators = ({target}) => {
    const {innerText} = target;

    if (innerText === '()') {
      this.handleParenthesis();
    }
    if (innerText === '+/-') {
      this.handleNegative();
    }
    if (innerText === '.') {
      this.handleDot();
    }

    if (
      innerText === '%' ||
      innerText === '/' ||
      innerText === '*' ||
      innerText === '-' ||
      innerText === '+'
    ) {
      this.setState({operator: innerText, display: ''});
    }
  };

  handleReset = () => {
    this.setState({
      display: '',
      operator: '',
      prevOperator: '',
      prevOperand: '',
      currOperand: '',
      firstNumber: '',
      otherNumber: '',
      clickedDot: false,
      clickedNegative: false,
      clickedPar: false,
    });
  };

  handleErase = ({target}) => {
    const {innerText} = target;
    if (innerText === 'CE') {
      this.handleReset();
    }

    if (innerText === 'C') {
      const {display, clickedDot} = this.state;
      this.setState({
        currOperand: '',
        display: display.slice(0, display.length - 1),
      });
      if (clickedDot && display.charAt(display.length - 1) === '.') {
        this.setState({clickedDot: false});
      }
    }
  };

  handleOperations = (numberOne, numberTwo) => {
    const {operator} = this.state;

    if (operator === '%') {
      this.setState({display: numberOne % numberTwo});
    }

    if (operator === '/') {
      this.setState({display: numberOne / numberTwo});
    }

    if (operator === '*') {
      this.setState({display: numberOne * numberTwo});
    }

    if (operator === '-') {
      this.setState({display: numberOne - numberTwo});
    }

    if (operator === '+') {
      this.setState({display: numberOne + numberTwo});
    }
  };

  handleResult = () => {
    const {firstNumber, otherNumber} = this.state;
    let numberOne;
    let numberTwo;

    if (firstNumber) {
      if (firstNumber.includes('-')) {
        numberOne = firstNumber
          .replaceAll('(', '')
          .replaceAll(')', '')
          .replaceAll('-', '');
        numberOne = -Math.abs(Number(numberOne));
      } else {
        numberOne = firstNumber.replaceAll('(', '').replaceAll(')', '');
        numberOne = Math.abs(Number(numberOne));
      }
    }

    if (otherNumber) {
      if (otherNumber.includes('-')) {
        numberTwo = otherNumber
          .replaceAll('(', '')
          .replaceAll(')', '')
          .replaceAll('-', '');
        numberTwo = -Math.abs(Number(numberTwo));
      } else {
        numberTwo = otherNumber.replaceAll('(', '').replaceAll(')', '');
        numberTwo = Math.abs(Number(numberTwo));
      }
    }

    this.handleReset();
    this.handleOperations(numberOne, numberTwo);
  };

  render() {
    const {display, error, errorMsg} = this.state;
    return (
      <div>
        <Header text="Calculator" show={true} />
        <div className="divCalculator">
          <ButtonsCalculator
            handleInput={this.handleInput}
            handleChangeDisplay={this.handleChangeDisplay}
            handleOperators={this.handleOperators}
            handleErase={this.handleErase}
            handleResult={this.handleResult}
            display={display}
          />
        </div>
        {error && <p>Error. {errorMsg}</p>}
        <Footer />
      </div>
    );
  }
}
