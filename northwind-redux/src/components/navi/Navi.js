import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand><Link to="/">Northwind Mağazası</Link></NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink><Link to="/saveproduct">Ürün Ekle</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/ipekguzel8/ReactProject">
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummary/>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
