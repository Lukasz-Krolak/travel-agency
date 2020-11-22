import React from 'react';
import styles from './LoginForm.scss';
import PropTypes from 'prop-types';


const LoginForm = ({setOptionValue, currentValue }) => (
  <form className={styles.component}>
    <input
      className={styles.input} 
      type="text"
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      placeholder={'Name'}
    />
    <input
      className={styles.input} 
      type="text"
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      placeholder={'Password'}
    />
    <input
      className={styles.input} 
      type="text"
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      placeholder={'e-mail'}
    />
  </form>

);

LoginForm.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};
export default LoginForm;