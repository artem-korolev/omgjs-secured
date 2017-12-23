import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { keyframes } from 'styled-components';
import PropTypes from 'prop-types';


// aliasing to match use of styled-components with npm
const transition = keyframes`
from {opacity: 0;}
to {opacity: 1;}`;
const animation = transition + ' 1s';

const flexStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100vw',
  height: '100vh',
  WebkitAnimation: animation, /* chrome and opera > 12.1 */
  MozAnimation: animation, /* Firefox < 16 */
  MsAnimation: animation, /* Internet Explorer */
  OAnimation: animation, /* Opera < 12.1 */
  animation,
};


export class LoginForm extends React.Component {

  state = {
    login: '',
    password: ''
  }

  loginInput = (evt) => {
    this.setState({ login: evt.target.value });
  }

  passwordInput = (evt) => {
    this.setState({ password: evt.target.value });
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  }

  render() {
    // const LoginForm = ({onSubmit}) => (
    return (
      <Paper zDepth={1} style={{ padding: '2rem' }}>
        <TextField
          floatingLabelText="Login/Email"
          type="text"
          onChange={this.loginInput}
        />
        <br />
        <TextField
          floatingLabelText="Password"
          type="password"
          onChange={this.passwordInput}
        />
        <br />
        <RaisedButton label="Login" primary={true} style={{ marginTop: "2rem" }} fullWidth={true} onClick={this.handleSubmit} />
      </Paper>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default LoginForm;
