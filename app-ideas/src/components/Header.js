import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/Header.css'

export default class Header extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className='divHeader'>
        <h1 className='h1Header'>{ text }</h1>
      </div>
    )
  }
}

Header.propTypes = {
  text: PropTypes.string,
}.isRequired;
