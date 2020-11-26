import React from 'react';
import styles from './LoginForm.scss';
import PropTypes from 'prop-types';


const LoginPassword = ({setLoginValue, currentValue }) => (
  <form className={styles.component}>
    <input
      className={styles.input} 
      type="text"
      value={currentValue}
      onChange={event => setLoginValue(event.currentTarget.value)}
      placeholder={'Password'}
    />
  </form>

);

LoginPassword.propTypes = {
  currentValue: PropTypes.string,
  setLoginValue: PropTypes.func,
};
export default LoginPassword;