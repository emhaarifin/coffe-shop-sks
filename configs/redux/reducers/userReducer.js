import { actionTypes } from "../constants/actionTypes";

const initialState = {
  profile: {},
  users: [],
  user: {},
  error: null
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        profile: action.payload
      }
    case actionTypes.EROR_LOGIN:
      return {
        error: action.payload
      }
    case actionTypes.UPDATE_USER:
      return {
        profile: action.payload
      }
    case actionTypes.GET_USERS:
      return {
        users: action.payload
      }
    case actionTypes.GET_SELECTED_USER:
      return {
        user: action.payload
      }
    case actionTypes.GET_USER:
      return{
        profile: action.payload
      }
      case 'LOGOUT': 
      return {
        profile: {}
      }
      case 'CHANGE_VALUE':
        return {
          ...state,
          profile: {
            ...state.profile,
            ...action.payload,
          },
        };
    default:
      return state;
  }
};
export default userReducer;