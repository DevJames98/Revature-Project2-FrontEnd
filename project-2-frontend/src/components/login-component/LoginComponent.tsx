import React, { SyntheticEvent } from "react";
import { Users } from "../../models/Users";
import { Redirect } from "react-router";
import { Col, Button, Form, FormGroup, Label, Input, Row } from "reactstrap";

interface LoginComponentProps {
  loggedUser: Users;
  loggedErrorMessage: string;
  LoginActionMapper: (u: string, p: string) => void;
}

interface LoginComponentState {
  usernameLogin: string;
  usernamePassword: string;
}

export class LoginComponent extends React.Component<
  LoginComponentProps,
  LoginComponentState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      usernameLogin: "",
      usernamePassword: ""
    };
  }

  loginUser = async (e: SyntheticEvent) => {
    e.preventDefault();
    this.props.LoginActionMapper(
      this.state.usernameLogin,
      this.state.usernamePassword
    );
    this.setState({
      usernamePassword: ""
    });
  };

  updateUsernameLogin = (e: any) => {
    this.setState({
      usernameLogin: e.currentTarget.value
    });
  };

  updateUsernamePassword = (e: any) => {
    this.setState({
      usernamePassword: e.currentTarget.value
    });
  };

  render() {
    return this.props.loggedUser.username ? (
      <Redirect to="/" />
    ) : (
      <>
        <h2>Welcome Back! Enjoy Shopping !</h2>
        <Form className="signUpForm" onSubmit={this.loginUser}>
          <Row form>
            <Col md={{ size: 2, offset: 5 }}>
              <FormGroup>
                <Label for="username" sm={5}>
                  Username
                </Label>
                <Input
                  autoFocus
                  onChange={this.updateUsernameLogin}
                  value={this.state.usernameLogin}
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
                  onChange={this.updateUsernamePassword}
                  value={this.state.usernamePassword}
                  type="password"
                  name="password"
                  id="password"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <div className="flex-container">
            <Button className="signUpButton" color="danger">
              Login
            </Button>
          </div>
        </Form>
        <p>{this.props.loggedErrorMessage}</p>
        <br></br>
      </>
    );
  }
}
