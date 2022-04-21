import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <h1>Footer</h1>
          <Link to='/'>
            <p>Back to Home</p>
          </Link>
      </div>
    )
  }
}
