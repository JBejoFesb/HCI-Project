import React from "react";
import style from "./popular-news-card-container.module.css";
import { IPopularNewsCard } from "../popular-news-card/popular-news-card";
import PopularNewsCard from "../popular-news-card/popular-news-card";

export interface IPopularNewsCardContainer {
    data: IPopularNewsCard[],
}

const test: IPopularNewsCard[] = [
    {
        tag: 'RECENZIJA',
        title: 'TESTIRAMO NESTO PRECOOL!',
        image: 'hog',
        suffix: 'jpg'
    },
];

const PopularNewsCardContainer: React.FC<IPopularNewsCardContainer> = ({ data }) => {
    return (
        <div className={style.container}>
            <PopularNewsCard tag={test[0].tag} title={test[0].title} image={test[0].image} suffix={test[0].suffix}/>
        </div>
    );
}

export default PopularNewsCardContainer;