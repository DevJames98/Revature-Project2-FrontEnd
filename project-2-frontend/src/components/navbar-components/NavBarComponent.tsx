import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";
import BottomNavBarComponent from "./BottomNavBarComponent";
import ShoppingBag from "../../assets/shopping-bag.jpeg";
import UserImg from "../../assets/user.jpg";
import Logo from "../../assets/logo.jpg";

//this is a function component
const NavBarComponent = (props: any) => {
  // useState is a hook
  // hooks are special functions provided by react for doing specific things
  // useState allows us to build a varibale that react keeps track of like state
  // hooks are only available in functions
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" id="topNavBar" light expand="md">
        {/* PUT LOGO HERE */}

        <img id="logo" src={Logo} alt="logo" />

        {/* PUT TITLE HERE */}
        <NavbarBrand href="/">LIQ & WIN</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* PUT USER PROFILE ICON HERE */}
            <NavItem>
              <Link to="/profile">
                <img className="navbar-img" src={UserImg} alt="user profile" />
              </Link>
            </NavItem>
            {/* PUT SHOPPING ICON HERE */}
            <NavItem>
              {/* Remember to change this to shopping cart */}
              <Link to="/checkout">
                <img
                  className="navbar-img"
                  src={ShoppingBag}
                  alt="shopping cart"
                />
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <BottomNavBarComponent />
    </div>
  );
};

export default NavBarComponent;
