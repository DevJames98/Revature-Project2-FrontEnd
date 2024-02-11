import { combineReducers } from "redux";
import { Inventory } from "../models/Inventory";
import { searchInventoryByTypeReducer} from "./search-inventory-by-type-reducer";
import { Users } from "../models/Users";
import { loginReducer } from "./login-reducer";
import { createUserReducer } from "./create-user-reducer";
  
//make interfaces for each "piece" of state
export interface ISearchInventoryByTypeState{
    inventoryByType:Inventory[],
    typeId: 0,
    errorMessage:string
}
  
//make interfaces for each "piece" of state
//User Login
export interface ILoginState {
  loggedUser: Users;
  errorMessage: string;
}

//CREATE USER
export interface ICreateUserState {
  createUser: Users;
  errorMessage: string;
}

//define all of the pieces of state
export interface IState {
  login: ILoginState;
  userCreation: ICreateUserState;
  searchInventoryByType:ISearchInventoryByTypeState;
}

//turn all individual pieces of state into a single state
export const state = combineReducers<IState>({
  login: loginReducer,
  userCreation: createUserReducer,
  searchInventoryByType: searchInventoryByTypeReducer
});

