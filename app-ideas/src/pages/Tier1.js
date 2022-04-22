import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../styles/Tier1.css';

export default class Tier1 extends Component {
  render() {
    return (
      <div className="divTier1">
        <Header text="Tier - 1" />
          <div className='Tier1List'>
            <Link to="/bin2dec">
              <h2 className='h2Tier1'>1 - Bin2Dec</h2>
            </Link>
          </div>
      <Footer />
        </div>
    )
  }
}
