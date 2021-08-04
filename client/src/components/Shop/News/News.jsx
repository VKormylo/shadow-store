import React from "react";
import NewsItem from "./NewsItem";
import s from "./News.module.css";

const News = (props) => {
  console.log(props);
  return (
    <div className={s.news}>
      {props.games
        .filter((n) => n.news)
        .map((game) => {
          return <NewsItem game={game} />;
        })}
    </div>
  );
};

export default News;
