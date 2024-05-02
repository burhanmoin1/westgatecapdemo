'use client';
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import Hamburger from 'hamburger-react';

const CustomNavbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Navbar bg="transparent" expand="lg" variant="dark" className="floaty-navbar">
      <Navbar.Brand className="logo-container">
          <Link className="navbar-logo" href="/">WestgateCapital
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger-container">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          duration={0.2}
          className="hamburger-icon"
        />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
        <Nav.Link>
          <Link href="/" className="NavLink-underline" >Home</Link>
        </Nav.Link>
          <Nav.Link>
          <Link href="/portfolio" className="NavLink-underline">Portfolio</Link>
          </Nav.Link>
          <Nav.Link>
          <Link href="/about-us" className="NavLink-underline">About Us</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
