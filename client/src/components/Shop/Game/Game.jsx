import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import s from "./Game.module.css";
import { useTranslation } from "react-i18next";
import addToWishlistIcon from "../../../assets/images/addToWishlist-black.svg";
import removeFromWishlistIcon from "../../../assets/images/removeFromWishlist-black.svg";

const Game = ({ addToLibrary, removeFromLibrary, ...props }) => {
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
    <div className={`${s.game} ${props.class ? s.filteredGames : ""}`}>
      {props.game.inWishlist ? (
        <img className={`${s.btn} ${s.remove}`} src={removeFromWishlistIcon} onClick={() => props.removeFromWishlist(props.game.id)} />
      ) : (
        <img className={`${s.btn} ${s.add}`} src={addToWishlistIcon} onClick={() => props.addToWishlist(props.game.id)} />
      )}
      <div className={s.wish}>
        {props.game.inWishlist ? t("game.remove") : t("game.add")}
      </div>
      <div onClick={redirect}>
        <div className={s.photo}>
          <img className={s.photoItem} src={props.game.gamePhoto} />
        </div>
        <div className={s.name}>{props.game.gameName}</div>
        {props.lib === "true" ? (
          ""
        ) : (
          <div className={s.dev}>{props.game.developer}</div>
        )}
        <div className={s.action}>
          {props.game.gamePrice === "Free" ||
          props.game.gamePrice === "Soon" ? (
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
    </div>
  );
};

export default Game;
