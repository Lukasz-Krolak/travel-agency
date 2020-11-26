import React from 'react';
import styles from './LoginForm.scss';
import PropTypes from 'prop-types';


const LoginName = ({setLoginValue, currentValue }) => (
  <form className={styles.component}>
    <input
      className={styles.input} 
      type="text"
      value={currentValue}
      onChange={event => setLoginValue(event.currentTarget.value)}
      placeholder={'Name'}
    ></input>
  </form>

);

LoginName.propTypes = {
  currentValue: PropTypes.string,
  setLoginValue: PropTypes.func,
  name: PropTypes.string,
};
export default LoginName;