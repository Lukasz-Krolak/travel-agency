import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-flexbox-grid';
import Section from '../../layout/Section/Section';


const Profile = ({ name, password, email}) => {
  console.log('profile', name, password, email);
  return (
    <Section>
      <Grid>
        <div>
          <h1>{name}</h1>
          <h2>{password}</h2>
          <h3>{email}</h3>
        </div>
      </Grid>
    </Section>
  );  
};

Profile.propTypes = {
  name: PropTypes.string,
  password: PropTypes.string,
  email: PropTypes.string,
};



export default Profile;
