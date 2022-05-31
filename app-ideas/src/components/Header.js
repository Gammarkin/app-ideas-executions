import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/main-styles/Header.css';

export default class Header extends Component {
  render() {
    const {text, show} = this.props;
    return (
      <div>
        <div className="divHeader">
          <h1 className="h1Header">{text}</h1>
          {show && (
            <ul className="ulHeader">
              <Link to="/tier1">
                <li>Tier - 1</li>
              </Link>
              <Link to="/tier2">
                <li>Tier - 2</li>
              </Link>
              <Link to="/tier3">
                <li>Tier - 3</li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string,
}.isRequired;
