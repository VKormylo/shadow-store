import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import s from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import storeIcon from "../../assets/images/navbar-icons/black-shop-tag.svg";
import libraryIcon from "../../assets/images/navbar-icons/window-of-four-rounded-squares.svg";
import settingsIcon from "../../assets/images/navbar-icons/settings.svg";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className={s.nav}>
      <Header />
      <nav className={s.items}>
        <div className={s.item}>
          <NavLink to="/store?main" activeClassName={s.activeLink}>
            <img className={s.icon} src={storeIcon} />
            {t("nav.store")}
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/library" activeClassName={s.activeLink}>
            <img className={s.icon} src={libraryIcon} />
            {t("nav.library")}
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/settings" activeClassName={s.activeLink}>
            <img className={s.icon} src={settingsIcon} />
            {t("nav.settings")}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
