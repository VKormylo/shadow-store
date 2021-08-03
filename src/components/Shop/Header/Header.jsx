import React, { useState } from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import searchIcon from "../../../assets/images/loupe.svg";
import closeIcon from "../../../assets/images/close.svg";

const Header = (props) => {
  const { t } = useTranslation();
  const doSearch = (e) => {
    props.updateSearch(e);
  };

  const [isShowed, setShow] = useState(false);
  const [isSearch, setSearch] = useState(false);

  const show = () => {
    setShow(!isShowed);
  };

  const showSearch = () => {
    setSearch(!isSearch);
  };

  return props.width > 900 ? (
    <div className={s.header}>
      <div className={s.links}>
        <div className={s.item}>
          <NavLink
            onClick={props.do ? "" : () => props.setStatus("main")}
            to="/store/main"
            activeClassName={s.activeLink}
          >
            {t("header.main")}
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            onClick={props.do ? "" : () => props.setStatus("browse")}
            to="/store/browse"
            activeClassName={s.activeLink}
          >
            {t("header.browse")}
          </NavLink>
        </div>
      </div>
      <div className={s.right}>
        <div className={`${s.item} ${s.wishlist}`}>
          <NavLink to="/wishlist" activeClassName={s.activeLink}>
            {t("header.wishlist")}
          </NavLink>
          {props.storePage.isWishlistEmpty ? (
            ""
          ) : (
            <div>
              {props.storePage.games.filter((add) => add.inWishlist).length ==
              0 ? (
                ""
              ) : (
                <div className={s.count}>
                  {props.storePage.games.filter((add) => add.inWishlist).length}
                </div>
              )}
            </div>
          )}
        </div>
        <div className={s.search}>
          <div className={s.searchIcon}>
            <img src={searchIcon} />
          </div>
          <input
            placeholder={props.do ? "Go to store" : t("placeholder")}
            disabled={props.do ? true : false}
            type="text"
            value={props.search}
            onChange={props.do ? "" : doSearch}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className={s.header}>
      <div className={s.content}>
        <div className={s.store}>Shadow Store</div>
        <nav className={s.nav}>
          <a
            className={`${s.currentLink} ${isShowed ? s.clicked : ""}`}
            onClick={show}
          >
            {props.status ? t(`header.${props.status}`) : t("header.wishlist")}
          </a>
          <ul className={`${s.submenu} ${isShowed ? "" : s.hidden}`}>
            <li onClick={show}>
              <NavLink
                onClick={props.do ? "" : () => props.setStatus("main")}
                to="/store/main"
                activeClassName={s.activeLink}
              >
                {t("header.main")}
              </NavLink>
            </li>
            <li onClick={show}>
              <NavLink
                onClick={props.do ? "" : () => props.setStatus("browse")}
                to="/store/browse"
                activeClassName={s.activeLink}
              >
                {t("header.browse")}
              </NavLink>
            </li>
            <li onClick={show}>
              <NavLink to="/wishlist" activeClassName={s.activeLink}>
                {t("header.wishlist")}
              </NavLink>
              {props.storePage.isWishlistEmpty ? (
                ""
              ) : (
                <div>
                  {props.storePage.games.filter((add) => add.inWishlist)
                    .length == 0 ? (
                    ""
                  ) : (
                    <div className={s.count}>
                      {
                        props.storePage.games.filter((add) => add.inWishlist)
                          .length
                      }
                    </div>
                  )}
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className={s.showSearch}>
        <div className={s.icon} onClick={showSearch}>
          <img src={searchIcon} />
        </div>
        <div className={`${s.searchBlock} ${isSearch ? s.showed : ""}`}>
          <div className={s.search}>
            <div className={s.searchIcon}>
              <img src={searchIcon} />
            </div>
            <input
              placeholder={props.do ? "Go to store" : t("placeholder")}
              disabled={props.do ? true : false}
              type="text"
              value={props.search}
              onChange={props.do ? "" : doSearch}
            />
          </div>
          <div className={s.close} onClick={showSearch}>
            <img src={closeIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
