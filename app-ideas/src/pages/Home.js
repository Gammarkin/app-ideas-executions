import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import '../styles/Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className=''>
        <Header text="Executions - tiers" />
          <Link to='/tier1'>
              <div className="homeTierOne">Tier One - Begginer</div>
          </Link>
          <Link to='/tier2'>
              <div className="homeTierTwo">Tier Two - Intermediate</div>
          </Link>
          <Link to='/tier3'>
          <div className="homeTierThree">Tier Three - Advanced</div>
          </Link>
      </div>
    )
  }
}
