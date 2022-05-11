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
    };
  }

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
    const intervalID = window.setInterval(this.handleChangeLights, 120);
    this.setState({intervalID, disabled: true});
    this.handleChangeBtnMessage();
  };

  handleStop = () => {
    const {intervalID} = this.state;

    clearInterval(intervalID);
    this.setState({disabled: false});
  };

  render() {
    const {disabled} = this.state;
    return (
      <div>
        <Header text="Christmas Lights" show={true} />
        <div className="xmasDiv">
          <section className="xmasBalls">
            <div className="firstBall"></div>
            <div className="secondBall"></div>
            <div className="firstBall"></div>
            <div className="secondBall"></div>
            <div className="firstBall"></div>
            <div className="secondBall"></div>
          </section>
          <div className="flex">
            <button
              className={`switchBtn xmasOn`}
              type="button"
              onClick={this.handleButton}
              disabled={disabled}
            >
              {`turn ON the lights.`}
            </button>
            <button
              disabled={!disabled}
              className="switchBtn xmasOff"
              onClick={this.handleStop}
            >
              turn OFF the lights
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
