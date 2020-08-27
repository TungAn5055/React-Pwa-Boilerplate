import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from '../../images/an0.jpg';
import messages from './messages';
import Img from './Img';
import { makeSelectToken } from '../../containers/HomePage/selectors';

export function Header({ token }) {
  return (
    <div>
      <Img src={Banner} alt="react-boilerplate - Logo" />
      <div className="header-custom">
        <HeaderLink to={token.token === '' ? '/' : ''}>
          {/* <button className="accountTrigger"> */}
          <span className="accountChip-root-3cE">
            <span className="icon-root-2D0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-icon-3jC"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <span>{token.token === '' ? 'Sign In' : 'My Account'}</span>
          </span>
          {/* </button> */}
        </HeaderLink>
        {/* eslint-disable-next-line react/button-has-type */}
        <button className="cartTrigger">
          <span className="icon-root-2D0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon-icon-3jC"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </span>
          <span className="cartTrigger-counter-2wP">1</span>
        </button>
      </div>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/product-list">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
        <HeaderLink to="/product-list2">
          <FormattedMessage {...messages.features2} />
        </HeaderLink>
        <HeaderLink to="/graphql">
          <FormattedMessage {...messages.graphql} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

Header.propTypes = {
  token: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(Header);
