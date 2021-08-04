import React from "react";
import s from "./WishlistGame.module.css";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const WishlistGame = (props) => {
  console.log(props.length);
  let history = useHistory();

  const redirect = () => {
    history.push("/gamepage", {
      game: props.game,
      currentPlace: t("game.currentPlace.store"),
    });
  };

  const { t } = useTranslation();
  return (
    <div className={s.game} onClick={redirect}>
      {props.games.filter((added) => added.inWishlist)
              .length <= 3 ? (
        <div className={`${s.photo} ${s.photoV}`}>
          <img src={props.game.gamepage.foto} />
        </div>
      ) : (
        <div className={`${s.photo} ${s.photoH}`}>
          <img src={props.game.gamePhoto} />
        </div>
      )}
      <div className={s.name}>{props.game.gameName}</div>
      <div className={s.dev}>{props.game.developer}</div>
      <div className={s.action}>
        {props.game.gamePrice === "Free" || props.game.gamePrice === "Soon" ? (
          <div className={s.price}>
            {t(`price.${props.game.gamePrice.toLowerCase()}`)}
          </div>
        ) : (
          <div className={s.price}>
            {props.game.gamePrice} {t("price.currency")}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistGame;
