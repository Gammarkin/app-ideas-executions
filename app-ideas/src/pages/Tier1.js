import React, {Component} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import '../styles/Tier1.css';

export default class Tier1 extends Component {
  render() {
    return (
      <div className="divTier1">
        <Header text="Tier - 1" />
        <div className="Tier1List">
          <Link to="/bin2dec">
            <h2 className="h2Tier1">
              1 - Bin2Dec: Binary-to-Decimal number converter
            </h2>
          </Link>
          <Link to="/borderRadious">
            <h2 className="h2Tier1">
              2 - Border Radius converter: Preview how CSS3 border-radius values
              affect an element
            </h2>
          </Link>
          <Link to="/calculator">
            <h2 className="h2Tier1">3 - Calculator</h2>
          </Link>
          <Link to="/xmas-lights">
            <h2 className="h2Tier1">
              4 - Christmas Lights: Simulate a string of Christmas lights
            </h2>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}
