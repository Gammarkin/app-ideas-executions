import React, {Component} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../styles/Tier3.css';

export default class Tier3 extends Component {
  render() {
    return (
      <div className="divTier3">
        <Header text="Tier - 3" />
        <div className="Tier3List">
          <h2 className="h2Tier3">
            There are no tier 2 execution YET. Try again soon.
          </h2>
        </div>
        <Footer />
      </div>
    );
  }
}
