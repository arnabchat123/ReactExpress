import React, { Component } from 'react';
import {
  faSignOutAlt,
  faCreditCard,
  faRupeeSign,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faFacebook,
  faGithub,
  faReact,
  faTwitter,
  faLinkedin,
  faYahoo,
  faAmazon,
  faWindows,
} from '@fortawesome/free-brands-svg-icons';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <>
            <li>
              <a href="/auth/google">
                <FontAwesomeIcon icon={faGoogle} size="2x" />
              </a>
            </li>
            <li>
              <a href="/auth/github">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li>
              <a href="/auth/facebook">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faYahoo} size="2x" />
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faWindows} size="2x" />
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faAmazon} size="2x" />
              </a>
            </li>
          </>
        );
      default:
        return [
          <li key="1" className="mx-5">
            <Payments></Payments>
          </li>,
          <li key="2" className="mx-3 my-2">
            <FontAwesomeIcon icon={faRupeeSign} size="2x" />
            <font style={{ height: 10 }}>{this.props.auth.credits}</font>
          </li>,
          <li key="3" className="my-2">
            <a href="/api/logout">
              LOGOUT
              <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
            </a>
          </li>,
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href={this.props.auth ? '/surveys' : '/'} className="brand-logo">
            <i className="fab fa-spin">
              <FontAwesomeIcon icon={faReact} size="3x" />
            </i>
            APP
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
