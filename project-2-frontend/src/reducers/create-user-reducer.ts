import { ICreateUserState } from ".";
import { Users } from "../models/Users";
import { AnyAction } from "redux";
import { createUserTypes } from "../action-mappers/create-user-mapper";

const initialState: ICreateUserState = {
  createUser: new Users(0, "", "", "", ""),
  errorMessage: ""
};

//created a reducer to update this piece of state
export const createUserReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case createUserTypes.CREATE_USER_SUCCESSFUL: {
      return {
        ...state,
        createUser: action.payload.newUser
      };
    }
    case createUserTypes.INVALID_CREDENTIALS: {
      return {
        ...state,
        errorMessage: "Invalid field values"
      };
    }
    case createUserTypes.INTERNAL_SERVER: {
      return {
        ...state,
        errorMessage: "Something went wrong"
      };
    }
    default:
      return state;
  }
};
