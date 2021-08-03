import React from "react";
import s from "../Wishlist.module.css";
import w from "./WishlistGame.module.css";
import WishlistGame from "./WishlistGame";
import { NavLink } from "react-router-dom";

const WishlistGames = (props) => {
  let width = window.innerWidth;
  return (
    <div className={w.wishlistGames}>
      <div className={w.header}>
        <div className={w.text}>From your wishlist</div>
        <div className={w.btn}>
          <NavLink to="/wishlist">Wishlist</NavLink>
        </div>
      </div>
      <div className={w.games}>
        {width > 1600
          ? props.games
              .filter((added) => added.inWishlist)
              .slice(0, 5)
              .map((game) => {
                return <WishlistGame game={game} games={props.games} />;
              })
          : width > 1300
          ? props.games
              .filter((added) => added.inWishlist)
              .slice(0, 4)
              .map((game) => {
                return <WishlistGame game={game} games={props.games} />;
              })
          : width > 860
          ? props.games
              .filter((added) => added.inWishlist)
              .slice(0, 3)
              .map((game) => {
                return <WishlistGame game={game} games={props.games} />;
              })
          : ""}
      </div>
    </div>
  );
};

export default WishlistGames;
