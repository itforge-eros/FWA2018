import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PropType from 'prop-types';

import { setCollapse } from './redux';
import { setLogout } from '../../../home/redux';
import { resetProfile } from '../../../profile/redux';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import { auth } from '../../../firebase';

// Custom Style
import './Navbar.css';

const enhance = compose(
  connect(
    (state) => state,
    { setCollapse, setLogout, resetProfile }
  )
);

const NavBar = (props) => {
  const {
    navbar: { collapsed },
    profile: { approve },
    setCollapse,
    setLogout,
    resetProfile
  } = props;

  const logout = () => {
    auth.signOut().then(() => {
      setLogout();
      setCollapse();
      resetProfile();
    });
  };

  let width = window.innerHeight < 992;

  return (
    <Navbar dark fixed="top" className="MainNavBar" expand="md">
      <Link to="/profile/me" className="mr-auto MainNavBarBrand">
        Freshy IT 2018
      </Link>
      <NavbarToggler onClick={width ? () => setCollapse() : () => {}} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          {approve ? (
            <Fragment>
              <NavItem onClick={width ? () => setCollapse() : () => {}}>
                <Link to="/profile/me" className="MainNavBarLink">
                  Profile
                </Link>
              </NavItem>
              <NavItem onClick={width ? () => setCollapse() : () => {}}>
                <Link to="/friends/list" className="MainNavBarLink">
                  Friends
                </Link>
              </NavItem>
              <NavItem onClick={width ? () => setCollapse() : () => {}}>
                <Link to="/quests/list" className="MainNavBarLink">
                  Quests
                </Link>
              </NavItem>
            </Fragment>
          ) : (
            ''
          )}
          <NavItem onClick={width ? () => setCollapse() : () => {}}>
            <a onClick={() => logout()} className="MainNavBarLink Logout">
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
  profile: PropType.shape({ approve: PropType.bool }),
  setCollapse: PropType.func,
  setLogout: PropType.func,
  resetProfile: PropType.func
};

export default enhance(NavBar);
