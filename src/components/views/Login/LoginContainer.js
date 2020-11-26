import Login from './Login.js';
import { connect } from 'react-redux';
import { getLoginName, getEmail, getPassword, setLoginOption } from './../../../redux/loginRedux.js';

const mapStateToProps = state => ({
  login: getLoginName(state),
  email: getEmail(state),
  password: getPassword(state),
});
const mapDispatchToProps = dispatch => ({
  setLoginOption: newState => dispatch(setLoginOption(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps )(Login);