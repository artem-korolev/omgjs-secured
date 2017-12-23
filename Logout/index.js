/**
 *
 * Logout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLogout from './selectors';
import makeSelectAuth from '../selectors';
import reducer from './reducer';
import saga from './saga';

export class Logout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <RaisedButton disabled={!this.props.auth.authenticated}>Logout</RaisedButton>
        </MuiThemeProvider>
      </div>
    );
  }
}

Logout.propTypes = {
  auth: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
  logout: makeSelectLogout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'logout', reducer });
const withSaga = injectSaga({ key: 'logout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Logout);
