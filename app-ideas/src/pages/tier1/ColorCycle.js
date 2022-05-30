import React, {Component} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {TextInput, Button} from '@mantine/core';

export default class ColorCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
      allColors: [],
      label: 'Type a Hexadecimal value for a color to show in the screen.',
      printColor: '',
      clicked: false,
      error: false,
      disabled: false,
    };
  }

  handleInputChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };

  handleColorVerification = () => {};

  handleAddColorToTheCycle = () => {
    const {allColors, color} = this.state;
    const MAX_LENGHT_OF_HEXADECIMALS = 7;

    if (color[0] === '#' && color.length <= MAX_LENGHT_OF_HEXADECIMALS) {
      this.setState({
        allColors: [...allColors, color],
        color: '',
        label: 'Chose another color for the cycle to loop for',
        error: false,
      });
    } else {
      this.setState({error: true});
    }
  };

  handleChangePrintColorState = () => {
    const {allColors, clicked} = this.state;

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      console.log(index);
    }, 2500);

    if (allColors.length > 0) {
      console.log(allColors[index]);
      this.setState({printColor: allColors[index], error: false});
      this.setState({disabled: true});
      console.log('iniciado');
    } else {
      this.setState({printColor: '#FAFAFA', error: true});
    }
    this.setState({clicked: !clicked});

    if (allColors.length - 1 === index) {
      clearInterval(interval);
      console.log('limpado');
      this.setState({disabled: false});
    }
  };

  render() {
    const {color, label, clicked, printColor, error, disabled} = this.state;
    return (
      <div>
        <Header text="Color Cycle" show={true} />
        <form>
          <TextInput
            onChange={this.handleInputChange}
            name="color"
            value={color}
            label={label}
            placeholder="#FAFAFA"
            radius="md"
            size="md"
          />
          <Button type="button" onClick={this.handleAddColorToTheCycle}>
            Add color to the cycle
          </Button>
          <Button
            disabled={disabled}
            type="button"
            onClick={this.handleChangePrintColorState}
          >
            {clicked ? 'Stop' : 'Start'}
          </Button>
        </form>
        {clicked && (
          <div style={{border: `5px solid ${printColor}`}}>
            <div style={{backgroundColor: printColor, height: '4rem'}} />
            <p
              style={{
                color: printColor,
                textAlign: 'center',
                fontSize: '2rem',
                fontWeight: '900',
              }}
            >
              {printColor}
            </p>
          </div>
        )}
        {error && (
          <p
            style={{
              color: 'red',
              textAlign: 'center',
              fontSize: '2rem',
              fontWeight: '900',
            }}
          >
            Error. Type a Hexadecimal Color.
          </p>
        )}
        <Footer />
      </div>
    );
  }
}
