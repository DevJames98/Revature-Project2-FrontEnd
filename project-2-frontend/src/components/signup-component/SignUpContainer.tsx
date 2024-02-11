import { connect } from "react-redux";
import { IState } from "../../reducers/index";
import { LoginActionMapper } from "../../action-mappers/login-action-mapper";
import { CreateUserActionMapper } from "../../action-mappers/create-user-mapper";
import { SignUpComponent } from "./SignUpComponent";

// this is the file to connects login Component to redux
// we define to config objects
// the first attachs data to Login Comp
// the second attachs action mappers to Login Comp

// this is how we choose what data to pass into a component
const mapStateToProps = (state: IState) => {
  return {
    createUser: state.userCreation.createUser,
    createErrorMessage: state.userCreation.errorMessage
  };
};

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
  CreateUserActionMapper
};

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
