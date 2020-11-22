
export const getLoginName = ({login}) => login;
export const getEmail = ({login}) => login;
export const getPassword =({login}) => login;


// action name creator
const reducerName = 'login';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const TYPE_LOGIN = createActionName('TYPE_LOGIN');

// action creators
export const createTypeLogin = payload => ({ payload, type: TYPE_LOGIN });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TYPE_LOGIN:
      return action.payload;
    default:
      return statePart;
  }
}
 
