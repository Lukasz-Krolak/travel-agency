
export const getLoginName = ({login}) => login.name;
export const getEmail = ({login}) => login.email;
export const getPassword = ({login}) => login.password;


// action name creator
const reducerName = 'login';
const createActionName = name => `app/${reducerName}/${name}`;

// action typsetes
export const SET_LOGIN = createActionName('SET_LOGIN');

// action creators
export const setLoginValue = payload => ({ payload, type: SET_LOGIN });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...statePart,
        login: {
          ...statePart.login,
          ...action.payload,
        },
      };
    default:
      return statePart;
  }
}
 
