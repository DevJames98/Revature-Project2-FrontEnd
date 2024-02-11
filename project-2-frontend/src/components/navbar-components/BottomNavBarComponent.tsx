import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";

//this is a function component
const BottomNavBarComponent = (props: any) => {
  // useState is a hook
  // hooks are special functions provided by react for doing specific things
  // useState allows us to build a varibale that react keeps track of like state
  // hooks are only available in functions
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" id="bottomNavBar" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="link" to="/about">
                ABOUT
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                WINE
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Champagne
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Red
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Rosé
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Sparkling
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    White
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <DropdownItem divider />
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                SPIRITS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Brandy
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Cognac
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Gin
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Rum
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Tequilla
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Vodka
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Whiskey
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <DropdownItem divider />
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                BEER
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Belgian
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Cider
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Lager
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Saison
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Sour
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Stout
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <DropdownItem divider />
            {/* Figure out all the brands once we know that information */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                BRANDS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Brand1
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Brand2
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Brand3
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Brand4
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Brand5
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Brand6
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Brand7
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Brand8
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Brand9
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="dropdown-link" to="/">
                    Brand10
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <DropdownItem divider />
            <NavItem>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default BottomNavBarComponent;
