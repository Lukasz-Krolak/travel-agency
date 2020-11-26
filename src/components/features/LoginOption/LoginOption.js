import React from 'react';
import styles from './LoginOption.scss';
import LoginName from './LoginName.js';
import LoginEmail from './LoginEmail.js';
import LoginPassword from './LoginPassword';

const loginTypes = {
  text: { LoginName, LoginEmail, LoginPassword },
};

const LoginOption = ({ type, id, setLoginOption, ...otherProps }) => {
  const LoginComponent = loginTypes[type] ;
  if(!LoginComponent ){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <LoginComponent setLoginValue={value => setLoginOption({[id]: value})}
          {...otherProps}
        />
      </div>
    );
  }
};
export default LoginOption;