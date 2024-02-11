import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBarComponent from "./components/navbar-components/NavBarComponent";
import { HomePageComponent } from "./components/home-page-component/HomePageComponent";
import { FooterComponent } from "./components/footer-component/FooterComponent";
import { CheckoutComponent } from "./components/checkout-component/CheckoutComponent";
import { UserProfileComponent } from "./components/user-profile-component/UserProfileComponent";
import { EditProfileComponent } from "./components/edit-profile-component/EditProfileComponent";
import { SearchInventoryByTypeComponent } from "./components/search-inventory-by-type-component/SearchInventoryByTypeComponent";
import { Users } from "./models/Users";
import SignUpComponent from "./components/signup-component/SignUpContainer";
import LoginComponent from "./components/login-component/LoginContainer";

class App extends React.Component<any, any> {
  // use State hook
  constructor(props: any) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  updateUser = (user: Users) => {
    this.setState({
      currentUser: user
    });
  };
  render() {
    return (
      <div className="App">
        {/* remember to switch to browser router */}
        <Provider store={store}>
          <Router>
            <NavBarComponent />

            <Switch>
              {/* edit User profile component */}
              <Route
                path="/edit"
                render={props => (
                  <EditProfileComponent
                    history={props.history}
                    match={props.match}
                    location={props.location}
                  />
                )}
              />
              {/* User profile component */}
              <Route
                path="/profile"
                render={props => (
                  <UserProfileComponent
                    history={props.history}
                    match={props.match}
                    location={props.location}
                  />
                )}
              />
              {/* Checkout Component */}
              <Route
                path="/checkout"
                render={props => (
                  <CheckoutComponent
                    history={props.history}
                    match={props.match}
                    location={props.location}
                    // currentUser={currentUser}
                  />
                )}
              />
              )} />
              {/* Test Type Component */}
              {/* '<Route
            path="/type/1"
            render={props => (
              <SearchInventoryByTypeComponent
                history={props.history}
                match={props.match}
                location={props.location}
                typeId={1}
                inventoryByType={[]}
                currentInventory={null}
                // currentUser={currentUser}
              />
            )}
          />' */}
              {/* Home Page Component */}
              <Route
                path="/"
                render={props => (
                  <HomePageComponent
                    history={props.history}
                    match={props.match}
                    location={props.location}
                    // currentUser={currentUser}
                  />
                )}
              />
              <Route
                path="/account"
                render={props => <SignUpComponent {...props} />}
              />
              <Route path="/login" render={() => <LoginComponent />} />
            </Switch>
            <FooterComponent />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
