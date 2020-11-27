import ProfileData from './ProfileData.js';
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

export default connect(mapStateToProps)(ProfileData);