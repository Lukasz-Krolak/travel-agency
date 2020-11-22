import Login from './Login.js';
import { connect } from 'react-redux';
import { getLoginName, getEmail, getPassword } from './../../../redux/loginRedux.js';
//przekazuje do propsów w state wartosci

const mapStateToProps = state => ({
  login: getLoginName(state),
  email: getEmail(state),
  password: getPassword(state),
});
// const mapDispatchToProps = dispatch => ({
//   setOrderOption: newState => dispatch(setOrderOption(newState)),
// });
// eslint-disable-next-line no-undef
export default connect(mapStateToProps, mapDispatchToProps)(Login);