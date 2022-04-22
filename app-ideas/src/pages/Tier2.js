import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Tier2.css';

export default class Tier2 extends Component {
  render() {
    return (
      <div className='divTier2'>
        <Header text="Tier - 2" />
          <div className='Tier2List'>
             <h2 className='h1Tier2'>
              There are no tier 2 execution YET. 
                Try again soon.
            </h2>
          </div>
           <Footer />
        </div>
    )
  }
}
