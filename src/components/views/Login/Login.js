import React from 'react';
//import PropTypes from 'prop-types';
import {Grid} from 'react-flexbox-grid';
import Section from '../../layout/Section/Section';


class Login extends React.Component {
  render() {
    return (
      <Section>
        <Grid>
          <div className="form-comp cfb">
            <h1>Login</h1>
            <form className="sign-up-form cfb">
              <label>
          Email:
                <br/>
                <input />
              </label>
              <label>
          Password:
                <br/>
                <input />
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
  }
}


export default Login;
