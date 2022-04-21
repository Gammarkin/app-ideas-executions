import React, { Component } from 'react'
import styles from './Home.modules.css'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className={styles.a} >
          <h1>Executions - tiers</h1>
          <Link to='/tier1'>
              <div className={styles.b}>Tier One - Begginer</div>
          </Link>
          <Link to='/tier2'>
              <div className={styles.a}>Tier Two - Intermediate</div>
          </Link>
          <Link to='/tier3'>
          <div className={styles.b}>Tier Three - Advanced</div>
          </Link>
      </div>
    )
  }
}
