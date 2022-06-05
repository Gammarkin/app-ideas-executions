import React, {Component} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {Outlet} from 'react-router-dom';
import {TextInput, Button, Center} from '@mantine/core';

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
      disabled: true,
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
        disabled: false,
      });
    } else {
      this.setState({error: true});
    }
  };

  handleChangePrintColorState = ({target: {name}}) => {
    const {allColors, clicked, disabled} = this.state;

    let index = 0;
    const interval = setInterval(() => {
      if (allColors.length > 0 && !disabled) {
        console.log(allColors[index]);
        this.setState({printColor: allColors[index], error: false});
        this.setState({disabled: false});
        console.log('iniciado');
        index += 1;

        if (index >= allColors.length) {
          clearInterval(interval);
          this.setState({disabled: true});
        }
      } else {
        this.setState({printColor: '#FAFAFA', error: true});
      }
    }, 2500);

    this.setState({clicked: !clicked});
  };

  render() {
    const {color, label, clicked, printColor, error, disabled} = this.state;
    return (
      <div>
        <Header text="Color Cycle" show={true} />
        <form>
          <TextInput
            style={{marginTop: '40px'}}
            onChange={this.handleInputChange}
            name="color"
            value={color}
            label={label}
            placeholder="#FAFAFA"
            radius="md"
            size="md"
          />
          <Center>
            <Button
              style={{marginLeft: '10px', marginTop: '10px'}}
              type="button"
              onClick={this.handleAddColorToTheCycle}
            >
              Add color to the cycle
            </Button>
            <Button
              style={{marginLeft: '12px', marginTop: '12px'}}
              disabled={disabled}
              type="button"
              onClick={this.handleChangePrintColorState}
              name={clicked ? 'Stop' : 'Start'}
            >
              {clicked ? 'Stop' : 'Start'}
            </Button>
          </Center>
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
        <Outlet />
      </div>
    );
  }
}
