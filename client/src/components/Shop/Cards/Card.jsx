import React from "react";
import CardItem from "./CardItem";
import s from "./Card.module.css";

const Card = (props) => {
  console.log(props);
  return (
    <div className={s.card}>
      <div className={s.category}>{props.category}</div>
      {props.games.filter((filter) => filter.filterBy === props.filter).slice(0, 5).map((game) => {
        return (
          <CardItem
            game={game}
            key={game.id}
            addToWishlist={props.addToWishlist}
            removeFromWishlist={props.removeFromWishlist}
          />
        );
      })}
    </div>
  );
};

export default Card;
