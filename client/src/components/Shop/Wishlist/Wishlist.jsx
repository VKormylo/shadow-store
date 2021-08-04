import React, { useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Wishlist.module.css";
import h from "../Shop.module.css";
import WishlistItem from "./WishlistItem";
import logoEmpty from "../../../assets/images/logo-empty.png";
import { useTranslation } from "react-i18next";
import Header from "../Header/Header";

const Wishlist = (props) => {
  console.log(props);

  const addClass = (e) => {
    e.target.classList.toggle(s.clicked);
  };
  const { t } = useTranslation();

  // const [isFiltered, setFilter] = useState(false);
  const [isShowed, setShow] = useState(false);
  const [isClicked, setClick] = useState(false);
  const [filterText, setFilterText] = useState(t("wishlist.sort.default"));

  const filter = (filter, text) => {
    // setFilter(!filter);
    setFilterText(text);
    setShow(!isShowed);
    setClick(!isClicked);
  };

  const doShow = () => {
    setShow(!isShowed);
    setClick(!isClicked);
  };

  let gameElements = [
    filterText == t("wishlist.sort.byalphabet")
      ? props.storePage.games
          .filter((add) => add.inWishlist)
          .sort(function (a, b) {
            if (a.gameName.toLowerCase() < b.gameName.toLowerCase()) return -1;
            if (a.gameName.toLowerCase() > b.gameName.toLowerCase()) return 1;
            return 0;
          })
          .map((game) => {
            return (
              <WishlistItem
                game={game}
                key={game.id}
                name={game.gameName}
                price={game.gamePrice}
                foto={game.gamepage.foto}
                price={game.gamePrice}
                removeFromWishlist={props.removeFromWishlist}
              />
            );
          })
      : filterText == t("wishlist.sort.price.lowToHigh")
      ? props.storePage.games
          .filter((add) => add.inWishlist)
          .sort((a, b) => {
            const aPrice = Number(a.gamePrice.replace(/[^0-9.-]+/g, ""));
            const bPrice = Number(b.gamePrice.replace(/[^0-9.-]+/g, ""));
            return aPrice - bPrice;
          })
          .map((game) => {
            return (
              <WishlistItem
                game={game}
                key={game.id}
                name={game.gameName}
                price={game.gamePrice}
                foto={game.gamepage.foto}
                price={game.gamePrice}
                removeFromWishlist={props.removeFromWishlist}
              />
            );
          })
      : filterText == t("wishlist.sort.price.highToLow")
      ? props.storePage.games
          .filter((add) => add.inWishlist)
          .sort((a, b) => {
            const aPrice = Number(a.gamePrice.replace(/[^0-9.-]+/g, ""));
            const bPrice = Number(b.gamePrice.replace(/[^0-9.-]+/g, ""));
            return bPrice - aPrice;
          })
          .map((game) => {
            return (
              <WishlistItem
                game={game}
                key={game.id}
                name={game.gameName}
                price={game.gamePrice}
                foto={game.gamepage.foto}
                price={game.gamePrice}
                removeFromWishlist={props.removeFromWishlist}
              />
            );
          })
      : props.storePage.games
          .filter((add) => add.inWishlist)
          .map((game) => {
            return (
              <WishlistItem
                game={game}
                key={game.id}
                name={game.gameName}
                price={game.gamePrice}
                foto={game.gamepage.foto}
                price={game.gamePrice}
                removeFromWishlist={props.removeFromWishlist}
              />
            );
          }),
  ];

  return (
    <div className={s.wishlist}>
      <Header {...props} do="true" width={props.width} />
      <div className={s.info}>{t("wishlist.info")}</div>
      <div className={s.spaceBetween}>
        <div className={`${s.sorting} ${s.item}`}>
          <div>{t("wishlist.sort.sort")}:</div>
          <a
            className={`${s.filter} + ${isClicked ? s.clicked : ""}`}
            onClick={doShow}
          >
            {filterText}
          </a>
          <div
            className={`${isShowed ? s.show : s.hidden} + ${
              filterText === "Стандартная" ||
              filterText === "По алфавиту" ||
              filterText === "Цена: По возрастанию" ||
              filterText === "Цена: По убыванию"
                ? s.ru
                : ""
            }`}
          >
            <ul className={s.items}>
              <li>
                <a
                  className={
                    filterText == t("wishlist.sort.default") ? s.active : ""
                  }
                  onClick={() => filter(true, t("wishlist.sort.default"))}
                >
                  {t("wishlist.sort.default")}
                </a>
              </li>
              <li>
                <a
                  className={
                    filterText == t("wishlist.sort.byalphabet") ? s.active : ""
                  }
                  onClick={() => filter(false, t("wishlist.sort.byalphabet"))}
                >
                  {t("wishlist.sort.byalphabet")}
                </a>
              </li>
              <li>
                <a
                  className={
                    filterText == t("wishlist.sort.price.lowToHigh")
                      ? s.active
                      : ""
                  }
                  onClick={() =>
                    filter(false, t("wishlist.sort.price.lowToHigh"))
                  }
                >
                  {t("wishlist.sort.price.lowToHigh")}
                </a>
              </li>
              <li>
                <a
                  className={
                    filterText == t("wishlist.sort.price.highToLow")
                      ? s.active
                      : ""
                  }
                  onClick={() =>
                    filter(false, t("wishlist.sort.price.highToLow"))
                  }
                >
                  {t("wishlist.sort.price.highToLow")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {props.storePage.isWishlistEmpty ? (
          ""
        ) : (
          <div className={s.count}>
            {props.storePage.games.filter((add) => add.inWishlist).length}{" "}
            game(s)
          </div>
        )}
      </div>
      {props.storePage.isWishlistEmpty ? (
        <div className={s.empty}>
          <img src={logoEmpty} />
          <div className={s.title}>{t("wishlist.empty.empty")}</div>
          <div className={s.text}>{t("wishlist.empty.descr")}</div>
          <div className={s.btnBack}>
            <NavLink to="/store/main">{t("wishlist.empty.back")}</NavLink>
          </div>
        </div>
      ) : (
        <div>{gameElements}</div>
      )}
    </div>
  );
};

export default Wishlist;
