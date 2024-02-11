import { ILoginState } from ".";
import { loginTypes } from "../action-mappers/login-action-mapper";
import { AnyAction } from "redux";
import { Users } from "../models/Users";

//initial state
const initialState: ILoginState = {
  loggedUser: new Users(0, "", "", "", ""),
  errorMessage: ""
};

/*make a reducer to update this state and
 whatever this method returns becomes the 
 state for this piece of state*/
export const loginReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    // each case for a different kind of action
    case loginTypes.SUCESSFUL_LOGIN: {
      // if you do not return a new object
      //react will not trigger a render
      return {
        ...state,
        loggedUser: action.payload.returningUser
      };
    }
    case loginTypes.INVALID_CREDENTIALS: {
      return {
        ...state,
        errorMessage: "Username or Password Incorrect"
      };
    }
    case loginTypes.INTERNAL_SERVER: {
      return {
        ...state,
        errorMessage: "Try again. Something went wrong"
      };
    }
    default:
      return state;
  }
};
