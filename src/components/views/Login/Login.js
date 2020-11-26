import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-flexbox-grid';
import Section from '../../layout/Section/Section';
import styles from './Login.scss';
import {Link} from 'react-router-dom';

const Login = ({setLoginValue, currentValue }) => {
  
  return( 
    <Section>
      <Grid>
        <div className="form-comp cfb">
          <h1 className={styles.name}>Login</h1>
          <form className="sign-up-form cfb">
            <input
              type='text'
              name='name'
              component='input'
              className={styles.input}
              placeholder={'Name:'}
              value={currentValue}
              onChange={event => setLoginValue(event.currentTarget.value)}
            />
            <input
              type='password'
              name='password'
              component='input'
              className={styles.input}
              placeholder={'Password:'}
              value={currentValue}
              onChange={event => setLoginValue(event.currentTarget.value)}
            />
            <input
              type='email'
              name='email'
              component='input'
              className={styles.input}
              placeholder={'Email:'}
              value={currentValue}
              onChange={event => setLoginValue(event.currentTarget.value)}
            />
            <Link to='/profile'>
              <button
                type='submit'

              >
          Sign In!
              </button>
            </Link>
          </form>
        </div>
      </Grid>
    </Section>
  );
};

Login.propTypes = {
  currentValue: PropTypes.string,
  setLoginValue: PropTypes.func,
};


export default Login;
 