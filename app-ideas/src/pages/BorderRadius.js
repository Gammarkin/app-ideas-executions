import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/BorderRadius.css';

export default class BorderRadius extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
    };
  }

  componentDidUpdate() {
    this.handleConvertBorder();
    this.handleWrite();
  }

  handleInput = ({target}) => {
    const {value, name} = target;
    this.setState({[name]: value});
  };

  handleConvertBorder = () => {
    const {input1, input2, input3, input4} = this.state;
    const example = document.querySelector('.borderExample');

    example.style.borderRadius = `${input1} ${input2} ${input3} ${input4}`;
  };

  handleWrite = () => {
    const {input1, input2, input3, input4} = this.state;
    const message = document.querySelector('.message');

    message.innerText = `${input1} ${input2} ${input3} ${input4}`;
  };

  render() {
    const {input1, input2, input3, input4} = this.state;
    const textToCopy = `border-radius: ${input1} ${input2} ${input3} ${input4};`;
    return (
      <div className="divBorder">
        <Header text="Border Radius Converter" show={true} />
        <div className="borderRadious">
          <div className="labelsBorder">
            <label className="labelBorder" htmlFor="input1">
              bottom-left
              <input
                value={input1}
                className="inputBorder"
                name="input1"
                onInput={this.handleInput}
                maxLength={10}
              />
            </label>
            <label className="labelBorder" htmlFor="input2">
              bottom-rigth
              <input
                value={input2}
                className="inputBorder"
                name="input2"
                onInput={this.handleInput}
                maxLength={10}
              />
            </label>
            <label className="labelBorder" htmlFor="input3">
              {/* the line below has some invisible unicode before top-left(2).*/}
              ⠀⠀top-left
              <input
                value={input3}
                className="inputBorder"
                name="input3"
                onInput={this.handleInput}
                maxLength={10}
              />
            </label>
            <label className="labelBorder" htmlFor="input4">
              {/* the line below has some invisible unicode. before top-rigth(3)*/}
              ⠀⠀⠀top-rigth
              <input
                value={input4}
                className="inputBorder"
                name="input4"
                onInput={this.handleInput}
                maxLength={10}
              />
            </label>
          </div>
        </div>
        <div className="divBorderMessage">
          <div className="borderExample"></div>
          <div className="borderEx">
            <p className="message"></p>
            <button
              className="button"
              onClick={() => {
                navigator.clipboard.writeText(textToCopy);
              }}
            >
              Copy
            </button>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}
