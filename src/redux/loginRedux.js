
export const getLoginName = name => name;
export const getEmail = email => email;
export const getPassword = password => password;


// action name creator
const reducerName = 'login';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const TYPE_LOGIN = createActionName('TYPE_LOGIN');

// action creators
export const setLoginOption = payload => ({ payload, type: TYPE_LOGIN });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TYPE_LOGIN:
      return action.payload;
    default:
      return statePart;
  }
}
 
