import React from "react";
import s from "./Slider.module.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import plusIcon from "../../../assets/images/plus-icon.svg";
import successIcon from "../../../assets/images/success-icon.svg";

const Slide = (props) => {
  let history = useHistory();

  const redirect = () => {
    history.push("/gamepage", { game: props.slide, currentPlace: t("game.currentPlace.store")});
  };
  const { t } = useTranslation();
  return (
    <div className={s.slide}>
      <img src={props.slide.gamepage.foto} />
      <div className={s.content}>
        <div className={s.name}>{props.slide.gameName}</div>
        <div className={s.descr}>{t("store.slider.outnow")}</div>
        <div className={s.text}>{props.slide.gamepage.descr}</div>
        <div className={s.btns}>
          {props.slide.gamePrice === "Free" ? (
            <div className={s.price}>{t("price.free")}</div>
          ) : (
            <div className={`${s.price} ${s.uah}`}>
              {props.slide.gamePrice} {t("price.currency")}
            </div>
          )}
          <div className={s.btnInner}>
            {props.slide.added ? (
              <NavLink to="/library" className={`${s.btn} ${s.buy}`}>
                {t("game.in")}
              </NavLink>
            ) : (
              <a
                className={`${s.btn} ${s.buy}`}
                onClick={redirect}
              >
                {props.slide.gamePrice === "Free"
                  ? t("game.get")
                  : t("game.buy")}
              </a>
            )}
            {props.slide.inWishlist ? (
              <div className={s.wishlist}>
                <div className={`${s.wish} ${s.remove}`}>
                  {t("game.remove")}
                </div>
                <a
                  className={`${s.btn} ${s.plus}`}
                  onClick={() => props.addToWishlist(props.slide.id)}
                >
                  <img src={successIcon} />
                </a>
              </div>
            ) : (
              <div className={s.wishlist}>
                <div className={`${s.wish} ${s.add}`}>{t("game.add")}</div>
                <a
                  className={`${s.btn} ${s.plus}`}
                  onClick={() => props.addToWishlist(props.slide.id)}
                >
                  <img src={plusIcon} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
