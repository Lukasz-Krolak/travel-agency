import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Section from '../../layout/Section/Section';
import styles from './Login.scss';
import {Link} from 'react-router-dom';
import PageTitle from '../../common/PageTitle/PageTitle';
import ListItem from '../../common/ListItem/ListItem';

const LoginForm = ({setLoginValue, currentValue }) => {
  
  return( 
    <Section>
      <Grid>
        <Row middle="md">
          <Col md={12} lg={6}>
            <PageTitle text='Login'/>
            <p className={styles.intro}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium elementum lectus, eu laoreet sapien tristique sed. Aliquam dapibus pharetra dictum. Nunc condimentum sodales nisl eget cursus. Cras est lacus, congue quis purus at, consectetur euismod metus. Curabitur ut lobortis arcu. Nunc faucibus ultrices eros, id efficitur arcu volutpat vitae. Sed at bibendum mauris, id facilisis quam.
            </p>
          </Col>
          <Col md={12} lg={4} lgOffset={2}>
            <form>
              <ListItem title= 'Add Your name' icon='user' />
              <input
                type='text'
                name='name'
                component='input'
                className={styles.input}
                placeholder={'Name:'}
                value={currentValue}
                onChange={event => setLoginValue(event.currentTarget.value)}
              />
              <ListItem title= 'Set access password' icon='lock' />
              <input
                type='password'
                name='password'
                component='input'
                className={styles.input}
                placeholder={'Password:'}
                value={currentValue}
                onChange={event => setLoginValue(event.currentTarget.value)}
              />
              <ListItem title= 'Set registration email' icon='envelope' />
              <input
                type='email'
                name='email'
                component='input'
                className={styles.input}
                placeholder={'Email:'}
                value={currentValue}
                onChange={event => setLoginValue(event.currentTarget.value)}
              />
              <Link to='/profileData'>
                <button type='submit'>
                 Sign In!
                </button>
              </Link>
            </form>
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};

LoginForm.propTypes = {
  currentValue: PropTypes.string,
  setLoginValue: PropTypes.func,
};


export default LoginForm;
 