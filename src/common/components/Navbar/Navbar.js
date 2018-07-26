import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PropType from 'prop-types';
import { setCollapse } from './redux';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

// Custom Style
import './Navbar.css';

const enhance = compose(
  withRouter,
  connect(
    (state) => state,
    { setCollapse }
  )
);

const NavBar = (props) => {
  const {
    navbar: { collapsed }
  } = props;

  const { setCollapse } = props;

  return (
    <Navbar dark fixed="top" className="MainNavBar">
      <Link to="/" className="mr-auto MainNavBarBrand">
        Freshy IT 2018
      </Link>
      <NavbarToggler onClick={() => setCollapse()} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <Link onClick={() => setCollapse()} to="/dashboard" className="MainNavBarLink">
              Dashboard
            </Link>
          </NavItem>
          <NavItem>
            <Link onClick={() => setCollapse()} to="/profile/me" className="MainNavBarLink">
              Profile
            </Link>
          </NavItem>
          <NavItem>
            <Link onClick={() => setCollapse()} to="/qr" className="MainNavBarLink">
              QR Code
            </Link>
          </NavItem>
          <NavItem>
            <Link onClick={() => setCollapse()} to="/quest" className="MainNavBarLink">
              Quest
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

NavBar.propTypes = {
  navbar: PropType.shape({ collapsed: PropType.bool }),
  setCollapse: PropType.func
};

export default enhance(NavBar);
