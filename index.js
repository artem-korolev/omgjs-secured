/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
  authenticate,
  authFailed,
  authSuccess,
  checkTokenByNetwork,
  checkTokenLocally,
  loadTokenFromLocalStorage,
  login,
  submitCredentials,
} from './actions';
import reducer from './reducer';
import saga from './saga';
import makeSelectAuth from './selectors';
import {
  AUTH_FAILED,
  AUTH_SUCCESS,
  AUTHENTICATE,
  CHECK_TOKEN_BY_NETWORK,
  CHECK_TOKEN_LOCALLY,
  LOAD_TOKEN_FROM_LOCAL_STORAGE,
  LOGIN,
  SUBMIT_CREDENTIALS
} from './constants';

import LoginDialog from './pages/LoginDialog';

export class Secured extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.actions = { ...this.actions, ...props.actions };
  }

  componentDidMount() {
    if (!this.props.auth.authenticated) {
      this.props.dispatch(this.actions.loadTokenFromLocalStorage(localStorage.getItem('token')));
    }
  }

  componentWillUpdate(nextProps) {
    switch (nextProps.auth.action) {
      case LOAD_TOKEN_FROM_LOCAL_STORAGE:
        if (this.tokenNetworkCheck) {
          this.props.dispatch(this.actions.checkTokenByNetwork(nextProps.auth.token));
        } else {
          this.props.dispatch(this.actions.checkTokenLocally(nextProps.auth.token));
        }
        break;
      case CHECK_TOKEN_LOCALLY:
        if (nextProps.auth.token) {
          this.props.dispatch(this.actions.authenticate());
        } else {
          this.props.dispatch(this.actions.login());
        }
        break;
      default:

      // do nothing
    }
  }

  actions = {
    authenticate,
    authFailed,
    authSuccess,
    checkTokenByNetwork,
    checkTokenLocally,
    loadTokenFromLocalStorage,
    login,
    submitCredentials,
  };

  tokenNetworkCheck = false;

  render() {
    const ChildComponent = this.props.component;

    switch (this.props.auth.action) {
      case SUBMIT_CREDENTIALS:
      case LOGIN:
      case AUTH_FAILED:
      case AUTH_SUCCESS:
        return <LoginDialog />;
      default:
        return this.props.auth.authenticated ? <ChildComponent /> : <div>Not authenticated to see this content block</div>;
    }
  }
}

Secured.propTypes = {
  component: PropTypes.func.isRequired,
  actions: PropTypes.object, /* user overriden actions */
  auth: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Secured);
