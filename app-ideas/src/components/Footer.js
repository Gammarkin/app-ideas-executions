import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="divFooter">
        <Link to="/app-ideas-executions/">
          <p className="pFooter">Back to Home</p>
        </Link>
      </div>
    );
  }
}
