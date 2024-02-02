import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HOME, ITEM_CATELOG } from "./Const/Constants";
import { useSelector } from "react-redux";
import { Store } from "../Store";

export default function NavBar() {
  // const state = useSelector((state) => state.handleCart);

  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          {ITEM_CATELOG}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                {HOME}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <NavLink className="btn btn-outline-dark" to="/login">
              <i className="fa fa-sign-in me-1"></i>Login
            </NavLink>
            <NavLink className="btn btn-outline-dark ms-2" to="/register">
              <i className="fa fa-user-plus me-1"></i>Register
            </NavLink>
            <NavLink className="btn btn-outline-dark ms-2" to="/cart">
              <i className="fa fa-shopping-cart me-1"></i>Cart (
              {cart.cartItems.length > 0 && <i>{cart.cartItems.length}</i>})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
