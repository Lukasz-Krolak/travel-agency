import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-flexbox-grid';
import Section from '../../layout/Section/Section';
import styles from './Login.scss';

const Login = ({setLoginValue}) => {
  return (
    <Section>
      <Grid>
        <div className="form-comp cfb">
          <h1 className={styles.name}>Login</h1>
          <form className="sign-up-form cfb">
            <label>
              <br/>
              <input
                className={styles.input}
                onChange={event => setLoginValue(event.currentTarget.value)}
                placeholder={'Name:'}/>
            </label>
            <label>
              <br/>
              <input 
                className={styles.input}
                onChange={event => setLoginValue(event.currentTarget.value)}
                placeholder={'Email:'}/>
            </label>
            <label>
              <br/>
              <input 
                className={styles.input}
                onChange={event => setLoginValue(event.currentTarget.value)}
                placeholder={'Password:'}/>
            </label>
            <br/>
            <button>
          Sign In!
            </button>
          </form>
        </div>
      </Grid>
    </Section>
  );
};
Login.propTypes = {
  name: PropTypes.string,
  password: PropTypes.string,
  email: PropTypes.string,
  setLoginValue: PropTypes.func,
};

export default Login;
