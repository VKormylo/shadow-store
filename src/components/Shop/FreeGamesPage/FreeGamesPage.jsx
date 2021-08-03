import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import FreeGame from "../FreeGames/FreeGame";
import Game from "../Game/Game";
import g from "../Game/GamePage/GamePage.module.css";
import s from "./FreeGamesPage.module.css";

const FreeGamesPage = (props) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={g.header}>
        <div className={g.back}>
          <span>
            <NavLink className={g.link} to="/store/main">
              {t("game.back")} {t("game.currentPlace.store")}
            </NavLink>
          </span>
        </div>
        <div className={g.name}>Free Games</div>
      </div>
      <div className={s.topContent}>
        <div className={s.descr}>Play more</div>
        <div className={s.title}>Free Games</div>
        <div className={s.text}>
          Shadow Store sometimes gives you a free game. Download a free game or
          join a free-to-play game community today. Here you can see all
          free-to-play games.
        </div>
      </div>
      <div className={s.temporarilyFreeGames}>
        {props.storePage.games
          .filter((date) => date.temporarilyFree)
          .map((game) => {
            return <FreeGame game={game} key={game.id} />;
          })}
      </div>
      <div className={s.mainContent}>
        <div className={s.subtitle}>Free to Play</div>
        <div className={s.freeGames}>
          {props.storePage.games
            .filter((free) => free.gamePrice === "Free")
            .map((game) => {
              return (
                <Game
                  game={game}
                  key={game.id}
                  addToWishlist={props.addToWishlist}
                  removeFromWishlist={props.removeFromWishlist}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FreeGamesPage;
