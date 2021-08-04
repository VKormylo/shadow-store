import React from "react";
import s from "./FreeGames.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FreeGame = (props) => {
  var currentDate = new Date();
  var month = currentDate.toLocaleString("en", { month: "long" });
  var day = currentDate.getDate();
  var date = month + " " + day;
  console.log(date);
  console.log(props);

  let history = useHistory();

  const redirect = () => {
    history.push("/gamepage", { game: props.game, currentPlace: t("game.currentPlace.store")});
  };

  const { t } = useTranslation();

  return (
    <div className={s.game} onClick={redirect}>
      <div className={s.foto}>
        <img src={props.game.gamePhoto} />
        {props.game.temporarilyFree[0].start.month === month && props.game.temporarilyFree[0].start.day <= day && props.game.temporarilyFree[0].end.day >= day ? (
          <div className={`${s.btnFree} ${s.now}`}>{t("store.freeGames.freeNow")}</div>
        ) : (
          <div className={`${s.btnFree} ${s.soon}`}>{t("store.freeGames.soon")}</div>
        )}
      </div>
      <div className={s.content}>
        <div className={s.name}>{props.game.gameName}</div>
        {props.game.temporarilyFree[0].start.month === month && props.game.temporarilyFree[0].start.day <= day && props.game.temporarilyFree[0].end.day >= day ? (
          <div className={s.date}>{t("store.freeGames.freeNow")} - {t(`months.${props.game.temporarilyFree[0].end.month.toLowerCase()}`)} {props.game.temporarilyFree[0].end.day} {t("store.freeGames.at")} {props.game.temporarilyFree[0].end.time}</div>
        ) : (
          <div className={s.date}>{t("price.free")} {t(`months.${props.game.temporarilyFree[0].start.month.toLowerCase()}`)} {props.game.temporarilyFree[0].start.day} - {t(`months.${props.game.temporarilyFree[0].end.month.toLowerCase()}`)} {props.game.temporarilyFree[0].end.day}</div>
        )}
      </div>
    </div>
  );
};

export default FreeGame;
