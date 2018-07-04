import React , { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './navbar.css'

class Mainnav extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className="Mainnav">
        <Navbar color="white" light>
          <NavbarBrand href="/" className="mr-auto">IT Freshy 2018</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">QR code</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Quest</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Mainnav;