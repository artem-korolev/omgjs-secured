import React from 'react';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import LoginForm from './LoginForm';
import { submitCredentials } from '../actions';

/*
 * Dialog content can be scrollable.
 */
class LoginDialog extends React.Component { // eslint-disable-line

  render() {
    return (
      <MuiThemeProvider>
        <Dialog
          modal={false}
          open={true}
          autoScrollBodyContent={true}
          bodyStyle={{ padding: 0 }}
        >
          <LoginForm onSubmit={this.props.onSubmit} />
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

LoginDialog.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (credentials) => dispatch(submitCredentials(credentials)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(LoginDialog);
