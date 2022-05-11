import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Christmas.css';

export default class ChristmasLights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalID: '',
      disabled: false,
      inputValue: 0,
      clicked: false,
      msg: 'ON',
      classs: 'xmasOn',
    };
  }

  handleInput = ({target}) => {
    if (!target.value) {
      this.setState({disabled: true});
    } else {
      this.setState({inputValue: target.value, disabled: false});
    }
  };

  handleChangeLights = () => {
    const firstBall = document.querySelectorAll('.firstBall');
    const secondBall = document.querySelectorAll('.secondBall');

    firstBall.forEach((ball) => {
      ball.className === 'firstBall'
        ? (ball.className = 'secondBall')
        : (ball.className = 'firstBall');
    });

    secondBall.forEach((ball) => {
      ball.className === 'secondBall'
        ? (ball.className = 'firstBall')
        : (ball.className = 'secondBall');
    });

    this.setState({clicked: true});
  };

  handleButton = () => {
    const {inputValue, clicked} = this.state;
    if (clicked) {
      this.handleStop();
      this.setState({clicked: false, msg: 'ON', classs: 'xmasOn'});
    } else {
      const intervalID = window.setInterval(
        this.handleChangeLights,
        inputValue
      );
      this.setState({intervalID, clicked: true, msg: 'OFF', classs: 'xmasOff'});
      this.handleChangeBtnMessage();
    }
  };

  handleStop = () => {
    const {intervalID} = this.state;

    clearInterval(intervalID);
  };

  render() {
    const {disabled, inputValue, msg, classs} = this.state;
    return (
      <div>
        <Header text="Christmas Lights" show={true} />
        <div className="xmasDiv">
          <section className="xmasBalls">
            <div className="firstBall" />
            <div className="secondBall" />
            <div className="firstBall" />
            <div className="secondBall" />
            <div className="firstBall" />
            <div className="secondBall" />
          </section>
          <p className="xmasP">Type the interval in miliseconds</p>
          <input type="number" onChange={this.handleInput} value={inputValue} />
          <div className="flex">
            <button
              className={`switchBtn ${classs}`}
              type="button"
              onClick={this.handleButton}
              disabled={disabled}
            >
              {`turn ${msg} the lights.`}
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
