import React from "react";
import style from "./popular-news-card-container.module.css";
import { IPopularNewsCard } from "../popular-news-card/popular-news-card";
import PopularNewsCard from "../popular-news-card/popular-news-card";

export interface IPopularNewsCardContainer {
    data: IPopularNewsCard[],
}

const PopularNewsCardContainer: React.FC<IPopularNewsCardContainer> = ({ data }) => {
    return (
        <div className={style.container}>
            {
                data.map((card: IPopularNewsCard, i: number) => {
                    return (
                        <PopularNewsCard tag={card.tag} title={card.title} image={card.image} suffix={card.suffix} key={`${card.title}-popularcard-${i}`}/>
                    )
                })
            }
        </div>
        
    );
}

export default PopularNewsCardContainer;