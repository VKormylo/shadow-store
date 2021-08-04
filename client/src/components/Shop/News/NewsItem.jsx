import React from "react";
import s from "./News.module.css";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewsItem = (props) => {
  let history = useHistory();

  const redirect = () => {
    history.push("/gamepage", { game: props.game, currentPlace: t("game.currentPlace.store")});
  };

  const { t } = useTranslation();

  return (
    <div className={s.item} onClick={redirect}>
      <div className={s.foto}>
        <img src={props.game.news.foto} />
      </div>
      <div className={s.content}>
        <div className={s.name}>{props.game.gameName}</div>
        <div className={s.text}>{props.game.news.text}</div>
      </div>
    </div>
  );
};

export default NewsItem;
