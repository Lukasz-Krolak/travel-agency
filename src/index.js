import './styles/global.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import App from './App';
import { reducer as formReducer } from 'redux-form';
import { combineReducer } from 'redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
export default combineReducer({
  form: formReducer,
});
