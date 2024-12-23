import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { BsHouse, BsInfoCircle, BsShop } from "react-icons/bs";

function Header() {
  return (
    <Navbar expand="lg" className="bg-light shadow">
      <Container>
        <Navbar.Brand style={{ fontSize: "30px", color: "black" }}>
          <Link to="/" style={{ textDecoration: "none", color: "orange" }}>
            <strong>ModernMart</strong>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              <BsHouse style={{ marginRight: "5px" }} />
              Home
            </Link>
            <Link to="/Aboutus" className="nav-link">
              <BsInfoCircle style={{ marginRight: "5px" }} />
              About Us
            </Link>
            <Link to="/Products" className="nav-link">
              <BsShop style={{ marginRight: "5px" }} />
              Products
            </Link>
            <Link to="/AddUser" className="nav-link">
              Registration
            </Link>
            
            <Link to="/Payment" className="nav-link">
Payment            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
