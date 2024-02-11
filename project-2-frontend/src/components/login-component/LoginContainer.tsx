import { connect } from "react-redux";
import { IState } from "../../reducers/index";
import { LoginActionMapper } from "../../action-mappers/login-action-mapper";
import { LoginComponent } from "./LoginComponent";

// this is the file to connects login Component to redux
// we define to config objects
// the first attachs data to Login Comp
// the second attachs action mappers to Login Comp

// this is how we choose what data to pass into a component
const mapStateToProps = (state: IState) => {
  return {
    loggedUser: state.login.loggedUser,
    loggedErrorMessage: state.userCreation.errorMessage
  };
};

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
  LoginActionMapper
};

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
