import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./Pictures/Logo.jpg";
import Home from "./Home";
import Menu from "./Menu";
import Contacts from "./Contacts";
import AboutUs from "./AboutUs";
import Order from "./Order";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-blick align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="respomsive-navbad-nav ">
              <Nav className="mr-auto text-white">
                <Nav.Link href="/">Пиццерия</Nav.Link>
                <Nav.Link href="/menu">Меню</Nav.Link>
                <Nav.Link href="/about">О нас</Nav.Link>
                <Nav.Link href="/contacts">Контакты</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Nav>
              <Navbar.Brand href="/order">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 16 16"
                  class="bi bi-cart4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                  />
                </svg>
              </Navbar.Brand>
            </Nav>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/order" component={Order} />
          </Switch>
        </Router>
      </>
    );
  }
}
