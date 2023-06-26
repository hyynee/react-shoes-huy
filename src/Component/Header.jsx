import React from "react";
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux'
import Login from "../Pages/admin/Login";
export default function Header() {
  // bs5-navbar-background
  const arrProduct = useSelector(state => state.cartReducer.cart);
  // console.log(arrProduct);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/" aria-current="page">
              Home <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
        </ul>
        {/* <form className="d-flex my-2 my-lg-0">
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
          /> */}
          {/* <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button> */}
          <NavLink className="nav-link text-white mx-2 mt-1" to="/login" >
          <i class="fas fa-circle-user"></i> Login
            </NavLink>
        {/* </form> */}
      </div>
    </nav>
  );
}
