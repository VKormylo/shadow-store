import React from "react";
import s from "./PopularGame.module.css";
import poe from "../../../assets/images/popular-poe.png";
import poeSmall from "../../../assets/images/popular-poe-small.jpg";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PopularGame = (props) => {
  console.log(props);
  const { t } = useTranslation();
  let history = useHistory();

  const redirect = () => {
    history.push("/gamepage", {
      game: props.game,
      currentPlace: t("game.currentPlace.store"),
    });
  };
  return (
    <div className={s.popular}>
      <div className={s.content}>
        <div className={s.title}>Path of Exile</div>
        <div className={s.text}>
          New league Expedition is in the game! Join now!
        </div>
        <div className={s.btn} onClick={redirect}>
          <a>{t("store.popularGame.btn")}</a>
        </div>
      </div>
      <div className={s.image}>
        <img className={s.big} src={poe} />
        <img className={s.small} src={poeSmall} />
      </div>
    </div>
  );
};

export default PopularGame;
