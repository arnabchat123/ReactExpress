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
  renderComponent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <>
            <li>
              <Link to="/auth/google">
                <FontAwesomeIcon icon={faGoogle} size="2x" />
              </Link>
            </li>
            <li>
              <Link to="/auth/github">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Link>
            </li>
            <li>
              <Link to="/auth/facebook">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faYahoo} size="2x" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faWindows} size="2x" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faAmazon} size="2x" />
              </Link>
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
            <Link to="/api/logout">
              LOGOUT
              <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
            </Link>
          </li>,
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">
            <i className="fab fa-spin">
              <FontAwesomeIcon icon={faReact} size="3x" />
            </i>
            APP
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderComponent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateProps({ auth }) {
  return { auth };
}

export default connect(mapStateProps)(Header);
