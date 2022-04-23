import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Bin2Dec.css'

export default class Bin2Dec extends Component {
    constructor(props) {
        super(props)
        this.state ={
            input: '',
            result: undefined,
            err: '',
        }
    }

    handleInput = ({ target }) => {
     this.setState({input: target.value})
    }

    handleBinary = () => {
 const { input } = this.state;
 const re = /^[0-1]{1,8}$/
    if(input && !isNaN(input) && re.test(input)){
             const result = parseInt(input, 2)
        this.setState({result})
        } else {
            this.setState({err: "error. Only 1's and 0's are permitted", result: undefined})
        }
    }

  render() {
      const { input, result, err } = this.state
    return (
      <div className='divBin'>
          <Header text="Bin2Dec" show={true}/>
          <div className='Bin2dec'>
              <label className='labelBin2dec' htmlFor='input'>
                  Your binnary here:
            <input
            
            className='inputBin'
            name='input'
            value={input}
            onInput={this.handleInput}
            maxLength={8}
            />
              </label>
              <button className='btnBin' onClick={this.handleBinary}>
                  Convert
              </button>
              <div className='resultBin'>
                   <p>{result >= 0 ? result : err}</p>
              </div>
          </div>
          <Footer/>
      </div>
    )
  }
}
