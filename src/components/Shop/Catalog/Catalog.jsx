import React from "react";
import s from "./Catalog.module.css";
import img from "../../../assets/images/games-img.png";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Catalog = (props) => {
  console.log(props);
  const scroll = () => {
    window.scrollTo(0, 0);
  };
  const { t } = useTranslation();

  return (
    <div className={s.catalog}>
      <div className={s.content}>
        <div className={s.top}>
          <div className={s.title}>{t("store.catalog.browse")}</div>
          <div className={s.text}>{t("store.catalog.text")}</div>
        </div>
        <div className={s.btn} onClick={() => props.setStatus("browse")}>
          <NavLink to="/store/browse">{t("store.catalog.btn")}</NavLink>
        </div>
      </div>
      <div className={s.image}>
        <img src={img} />
      </div>
    </div>
  );
};

export default Catalog;
