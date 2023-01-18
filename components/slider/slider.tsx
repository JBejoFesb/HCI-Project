import React from "react";
import style from "./slider.module.css";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PopularNewsCardContainer from '../cards/popular-news-card-container/popular-news-card-container';
import popular_news_cards from "../../static-data/popular-news-cards.json";

const carousel: KeenSliderPlugin = (slider) => {
  const z = 250;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const Slider = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap"
    },
    [carousel]
  );

  return (
    <div className={style.wrapper}>
      <div className={style.scene}>
        <div className="carousel keen-slider"  ref={sliderRef}>
          <div className="carousel__cell number-slide1 "><PopularNewsCardContainer data={[popular_news_cards.popularNewsCards[0]]}/></div>
          <div className="carousel__cell number-slide2"><PopularNewsCardContainer data={[popular_news_cards.popularNewsCards[1]]}/></div>
          <div className="carousel__cell number-slide3"><PopularNewsCardContainer data={[popular_news_cards.popularNewsCards[2]]}/></div>
          <div className="carousel__cell number-slide4">4</div>
          <div className="carousel__cell number-slide5">5</div>
          <div className="carousel__cell number-slide6">6</div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
