import React from "react";
import s from "./Card.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import addToWishlistIcon from "../../../assets/images/addToWishlist-icon.svg";
import removeFromWishlistIcon from "../../../assets/images/removeFromWishlist-icon.svg";

const CardItem = (props) => {
  console.log(props);
  let history = useHistory();

  const redirect = () => {
    history.push("/gamepage", {
      game: props.game,
      currentPlace: t("game.currentPlace.store"),
    });
  };

  const { t } = useTranslation();
  return (
    <div className={s.item}>
      <div className={s.contentInner} onClick={redirect}>
        <div className={s.foto}>
          <img src={props.game.gamePhoto} />
        </div>
        <div className={s.content}>
          <div className={s.name}>{props.game.gameName}</div>
          {props.game.gamePrice === "Free" || props.game.gamePrice === "Soon" ? (
            <div className={s.price}>{t(`price.${props.game.gamePrice.toLowerCase()}`)}</div>
          ) : (
            <div className={s.price}>{props.game.gamePrice} {t("price.currency")}</div>
          )}
        </div>
      </div>
      {props.game.inWishlist ? (
        <div className={s.wishlist}>
          <div className={s.hidden}>{t("game.remove")}</div>
          <div
            className={s.add}
            onClick={() => props.removeFromWishlist(props.game.id)}
          >
            <img src={removeFromWishlistIcon} />
          </div>
        </div>
      ) : (
        <div className={s.wishlist}>
          <div className={s.hidden}>{t("game.add")}</div>
          <div
            className={s.add}
            onClick={() => props.addToWishlist(props.game.id)}
          >
            <img src={addToWishlistIcon} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardItem;
