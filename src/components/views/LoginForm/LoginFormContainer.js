import LoginForm from './LoginForm.js';
import { connect } from 'react-redux';
import { getLoginName, getEmail, getPassword } from '../../../redux/loginRedux.js';

const mapStateToProps = state => {
  const name = getLoginName(state);
  const email = getEmail(state);
  const password = getPassword(state);
  return {
    name,
    email,
    password,
  };
};
const mapDispatchToProps = (dispatch, name, password, email) => {
  return {
    setLoginValue: () => dispatch(
  
      name,
      email,
      password,
    ),
  };
};

  



export default connect(mapStateToProps, mapDispatchToProps )(LoginForm);