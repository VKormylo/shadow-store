import React from "react";
import s from "./Navbar.module.css";
import logo from "../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.header}>
      <NavLink to="/store/main" className={s.logoText}>
        <div>
          <img src={logo} />
        </div>
        <a>Shadow Store</a>
      </NavLink>
    </div>
  );
};

export default Header;