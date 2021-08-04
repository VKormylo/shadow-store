import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import s from "../Shop/Game/Game.module.css";
import l from "./Library.module.css";
import { useTranslation } from "react-i18next";

const LibraryGame = ({ addToLibrary, removeFromLibrary, ...props }) => {
  console.log(props);

  const [isShowed, setShow] = useState(false);

  const toggle = () => {
    setShow(!isShowed);
  };

  let history = useHistory();

  const redirect = (e) => {
    history.push("/gamepage", {
      game: props.game,
      currentPlace: t("game.currentPlace.library"),
    });
  };

  const { t } = useTranslation();
  return props.view === "card" ? (
    <div className={l.gameC}>
      <div className={l.photo}>
        <img src={props.photo} />
      </div>
      <div className={l.name}>{props.name}</div>
      <div className={l.infoBtns}>
        <div className={l.download}>
          {props.game.isDownloaded == false ? (
            <a
              href="#"
              className={l.downloaded}
              onClick={() => props.downloadGame(props.game.id)}
            >
              {t("library.libraryGame.download")}
            </a>
          ) : (
            <a href="#" className={l.nonDownloaded}>
              {t("library.libraryGame.start")}
            </a>
          )}
        </div>
        <div className={l.btnMore}>
          <a className={l.btn} onClick={toggle}>
            . . .
          </a>
          <div className={isShowed ? l.show : l.info}>
            <ul className={l.items}>
              <li>
                <a onClick={redirect}>{t("library.libraryGame.visit")}</a>
              </li>
              <li>
                <a
                  onClick={() => {
                    removeFromLibrary(props.game.id);
                  }}
                >
                  {t("library.libraryGame.remove")}
                </a>
              </li>
              <li>
                {props.game.isDownloaded == true ? (
                  <a onClick={() => props.deleteGame(props.game.id)}>
                    {t("library.libraryGame.delete")}
                  </a>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={l.gameL}>
      <div className={l.content}>
        <div className={l.photo}>
          <img className={l.foto} src={props.foto} />
        </div>
        <div className={l.action}>
          <div className={l.name}>{props.name}</div>
          <div className={l.download}>
            {props.game.isDownloaded == false ? (
              <a
                href="#"
                className={l.downloaded}
                onClick={() => props.downloadGame(props.game.id)}
              >
                {t("library.libraryGame.download")}
              </a>
            ) : (
              <a href="#" className={l.nonDownloaded}>
                {t("library.libraryGame.start")}
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={l.btnMore}>
        <div className={l.btn}>
          <a onClick={toggle}>
            . . .
          </a>
        </div>
        <div className={isShowed ? l.showInfo : l.info}>
          <ul className={l.items}>
            <li>
              <a onClick={redirect}>{t("library.libraryGame.visit")}</a>
            </li>
            <li>
              <a
                onClick={() => {
                  removeFromLibrary(props.game.id);
                }}
              >
                {t("library.libraryGame.remove")}
              </a>
            </li>
            <li>
              {props.game.isDownloaded == true ? (
                <a onClick={() => props.deleteGame(props.game.id)}>
                  {t("library.libraryGame.delete")}
                </a>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LibraryGame;
