import React, {Component} from 'react';

export default class ButtonsCalculator extends Component {
  render() {
    return (
      <div className="calculatorButtons">
        <div className="display">
          <span className="display-text">0</span>
          <button className="operatorCE">CE</button>
        </div>
        <div className="buttonsCalc">
          <button className="operator">C</button>
          <button className="operator">()</button>
          <button className="operator">%</button>
          <button className="operator">/</button>
          <button className="number">9</button>
          <button className="number">8</button>
          <button className="number">7</button>
          <button className="operator">*</button>

          <button className="number">6</button>
          <button className="number">5</button>
          <button className="number">4</button>
          <button className="operator">-</button>

          <button className="number">3</button>
          <button className="number">2</button>
          <button className="number">1</button>
          <button className="operator">+</button>

          <button className="number">0</button>
          <button className="operator">+/-</button>
          <button className="operator">.</button>
          <button className="operator">=</button>
        </div>
      </div>
    );
  }
}
