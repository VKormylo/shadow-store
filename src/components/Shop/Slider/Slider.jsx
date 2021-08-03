import React, { useState, useEffect } from "react";
import s from "./Slider.module.css";
import Slide from "./Slide"

const Slider = (props) => {
  // let baseId = 1;

  let [baseId, setId] = useState(1);
  function showSlide(slideId) {
    setId(slideId);
  }

  useEffect(() => {
    function showNextSlide() {
      setId(baseId + 1);
    }

    if (baseId > 6) {
      setId(1);
      const interval = setInterval(showNextSlide, 5000);
      return () => clearInterval(interval);
    } else {
      const interval = setInterval(showNextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [baseId]);

  return (
    <div className={s.slider}>
      <div className={s.slides}>
        {props.games
          .slice(0, 6)
          .filter((game) => game.id === baseId)
          .map((slide) => {
            return (
              <Slide key={slide.id} slide={slide} addToLibrary={props.addToLibrary} addToWishlist={props.addToWishlist} />
            );
          })}
      </div>
      <div className={s.thumbnails}>
        {props.games.slice(0, 6).map((slide) => {
          return (
            <div
              className={`${s.thumbnail} ${baseId == slide.id ? s.active : ""}`}
              key={slide.id}
              onClick={() => showSlide(slide.id)}
            >
              <img className={s.foto} src={slide.gamePhoto} />
              <div className={s.name}>{slide.gameName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
