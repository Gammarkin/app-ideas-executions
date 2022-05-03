import React, {Component} from 'react';

export default class ButtonsCalculator extends Component {
  render() {
    const {display, handleErase, handleChangeDisplay} = this.props;
    return (
      <div className="calculatorButtons">
        <div className="display">
          <span className="display-text">{display}</span>
          <button onClick={handleErase} className="operatorCE">
            CE
          </button>
        </div>
        <div className="buttonsCalc">
          <button onClick={handleErase} className="operator">
            C
          </button>
          <button className="operator">()</button>
          <button className="operator">%</button>
          <button className="operator">/</button>
          <button onClick={handleChangeDisplay} className="number">
            9
          </button>
          <button onClick={handleChangeDisplay} className="number">
            8
          </button>
          <button onClick={handleChangeDisplay} className="number">
            7
          </button>
          <button className="operator">*</button>

          <button onClick={handleChangeDisplay} className="number">
            6
          </button>
          <button onClick={handleChangeDisplay} className="number">
            5
          </button>
          <button onClick={handleChangeDisplay} className="number">
            4
          </button>
          <button className="operator">-</button>

          <button onClick={handleChangeDisplay} className="number">
            3
          </button>
          <button onClick={handleChangeDisplay} className="number">
            2
          </button>
          <button onClick={handleChangeDisplay} className="number">
            1
          </button>
          <button className="operator">+</button>

          <button onClick={handleChangeDisplay} className="number">
            0
          </button>
          <button className="operator">+/-</button>
          <button className="operator">.</button>
          <button className="operator">=</button>
        </div>
      </div>
    );
  }
}
