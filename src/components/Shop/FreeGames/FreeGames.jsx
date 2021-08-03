import React from "react";
import FreeGame from "./FreeGame";
import s from "./FreeGames.module.css";
import giftIcon from "../../../assets/images/giftbox.svg";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FreeGames = (props) => {
  let history = useHistory();

  const redirect = () => {
    history.push("/freegames");
  };
  const { t } = useTranslation();

  return (
    <div className={s.freeGames}>
      <div className={s.header}>
        <div className={s.logo}>
          <img src={giftIcon} />
          <div className={s.title}>{t("store.freeGames.title")}</div>
        </div>
        <div className={s.btn} onClick={redirect}>{t("store.freeGames.btn")}</div>
      </div>
      <div className={s.games}>
        {props.games
          .filter((date) => date.temporarilyFree)
          .map((game) => {
            return <FreeGame game={game} key={game.id} />;
          })}
      </div>
    </div>
  );
};

export default FreeGames;
