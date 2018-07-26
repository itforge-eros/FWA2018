import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PropType from 'prop-types';

import { setCollapse } from './redux';
import { setLogout } from '../../../home/redux';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import { auth } from '../../../firebase';

// Custom Style
import './Navbar.css';

const enhance = compose(
  connect(
    (state) => state,
    { setCollapse, setLogout }
  )
);

const NavBar = (props) => {
  const {
    navbar: { collapsed }
  } = props;

  const { setCollapse } = props;
  const { setLogout } = props;

  const logout = () => {
    auth.signOut().then(() => {
      setLogout();
      setCollapse();
    });
  };

  return (
    <Navbar dark fixed="top" className="MainNavBar">
      <Link to="/" className="mr-auto MainNavBarBrand">
        Freshy IT 2018
      </Link>
      <NavbarToggler onClick={() => setCollapse()} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <Link to="/dashboard" className="MainNavBarLink">
              Dashboard
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/profile/me" className="MainNavBarLink">
              Profile
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/qr" className="MainNavBarLink">
              QR Code
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/quest" className="MainNavBarLink">
              Quest
            </Link>
          </NavItem>
          <NavItem>
            <a onClick={() => logout()} className="MainNavBarLink">
              Logout
            </a>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

NavBar.propTypes = {
  navbar: PropType.shape({ collapsed: PropType.bool }),
  setCollapse: PropType.func,
  setLogout: PropType.func
};

export default enhance(NavBar);
