import React from 'react'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from 'mdbreact'

const Navbar = () => {
  return (
    <MDBNavbar
      color="special-color-dark"
      dark
      expand="md"
      style={{ width: '100%' }}
    >
      <MDBNavbarBrand>
        <strong className="white-text" style={{ fontFamily: 'monospace' }}>
          Tri Nguyen
        </strong>
      </MDBNavbarBrand>
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBNavLink
            className="waves-effect waves-light"
            to="/about"
            style={{ fontFamily: 'monospace' }}
          >
            <MDBIcon icon="home" className="mr-1" />
            About Me
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            className="waves-effect waves-light"
            to="/portfolio"
            style={{ fontFamily: 'monospace' }}
          >
            <MDBIcon icon="code" className="mr-1" />
            Projects
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            className="waves-effect waves-light"
            to="/resume"
            style={{ fontFamily: 'monospace' }}
          >
            <MDBIcon icon="file" className="mr-1" />
            Resume
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            className="waves-effect waves-light"
            to="/contact"
            style={{ fontFamily: 'monospace' }}
          >
            <MDBIcon icon="envelope" className="mr-1" />
            Contact
          </MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  )
}

export default Navbar
