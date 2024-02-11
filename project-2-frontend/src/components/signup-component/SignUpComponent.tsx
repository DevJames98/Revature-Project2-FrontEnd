import React, { SyntheticEvent } from "react";
import { Users } from "../../models/Users";
import { Redirect } from "react-router";
import { Col, Button, Form, FormGroup, Label, Input, Row } from "reactstrap";

interface SignUpComponentProps {
  createUser: Users;
  createErrorMessage: string;
  history: any;
  CreateUserActionMapper: (
    u: string,
    p: string,
    fn: string,
    ls: string,
    e: string
  ) => void;
}

interface SignUpComponentState {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

export class SignUpComponent extends React.Component<
  SignUpComponentProps,
  SignUpComponentState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    };
  }

  createUser = async (e: SyntheticEvent) => {
    e.preventDefault();
    const { username, password, firstName, lastName, email } = this.state;
    this.props.CreateUserActionMapper(
      username,
      password,
      firstName,
      lastName,
      email
    );
    this.setState({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    });
  };

  updateUsername = (e: any) => {
    this.setState({
      username: e.currentTarget.value
    });
  };

  updatePassword = (e: any) => {
    this.setState({
      password: e.currentTarget.value
    });
  };

  updateFirstName = (e: any) => {
    this.setState({
      firstName: e.currentTarget.value
    });
  };

  updateLastName = (e: any) => {
    this.setState({
      lastName: e.currentTarget.value
    });
  };

  updateEmail = (e: any) => {
    this.setState({
      email: e.currentTarget.value
    });
  };

  render() {
    return this.props.createUser.userId ? (
      <Redirect to="/" />
    ) : (
      <>
        <h2>Welcome to Liq And Win!</h2>
        <h4>
          As a result of <span>coronavirus disease (COVID-19)</span>, we will
          deliver to your choice for free!
        </h4>
        {/* SIGN UP FORM */}
        <Form className="signUpForm" onSubmit={this.createUser}>
          <Row form>
            <Col md={{ size: 2, offset: 5 }}>
              <FormGroup>
                <Label for="username" sm={5}>
                  Username
                </Label>
                <Input
                  autoFocus
                  onChange={this.updateUsername}
                  value={this.state.username}
                  type="text"
                  name="username"
                  id="username"
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={{ size: 2, offset: 5 }}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  autoFocus
                  onChange={this.updatePassword}
                  value={this.state.password}
                  type="password"
                  name="password"
                  id="password"
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={{ size: 2, offset: 5 }}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  autoFocus
                  onChange={this.updateFirstName}
                  value={this.state.firstName}
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={{ size: 2, offset: 5 }}>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  autoFocus
                  onChange={this.updateLastName}
                  value={this.state.lastName}
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={{ size: 2, offset: 5 }}>
              <FormGroup>
                <Label for="email">Email Address</Label>
                <Input
                  autoFocus
                  onChange={this.updateEmail}
                  value={this.state.email}
                  type="text"
                  name="email"
                  id="email"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <div className="flex-container">
            <Button className="signUpButton" color="danger">
              Submit
            </Button>
            <Button
              className="signUpButton"
              color="danger"
              path={"/login"}
              onClick={() => {
                this.props.history.push("/login");
              }}
            >
              Already A User ?
            </Button>
          </div>
        </Form>
        <p>{this.props.createErrorMessage}</p>
        <br></br>
      </>
    );
  }
}
