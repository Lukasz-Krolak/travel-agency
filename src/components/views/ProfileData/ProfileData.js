import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Section from '../../layout/Section/Section';
import styles from './ProfileData.scss';
import PageTitle from '../../common/PageTitle/PageTitle';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';


const ProfileData = ({ name, password, email}) => {
  console.log('profile', name, password, email);
  return (
    <Section>
      <Grid>
        <Row middle="md">
          <Col md={12} lg={6}>
            <PageTitle text='Personal info' />
            <p className={styles.intro}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium elementum lectus, eu laoreet sapien tristique sed. Aliquam dapibus pharetra dictum. Nunc condimentum sodales nisl eget cursus. Cras est lacus, congue quis purus at, consectetur euismod metus. Curabitur ut lobortis arcu. Nunc faucibus ultrices eros, id efficitur arcu volutpat vitae. Sed at bibendum mauris, id facilisis quam.
            </p>
          </Col>
          <Col md={12} lg={4} lgOffset={2}>
            <List variant='light'>
              <ListItem title= {name} icon='user' />
              <ListItem title= {email} icon='envelope' />
            </List>
          </Col>
        </Row>
      </Grid>
    </Section>
  );  
};

ProfileData.propTypes = {
  name: PropTypes.string,
  password: PropTypes.string,
  email: PropTypes.string,
};



export default ProfileData;
