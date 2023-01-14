import React from "react";
import { INewsCard } from "../news-card/news-card";
import NewsCard from "../news-card/news-card";
import style from "./news-card-container.module.css";

export interface INewsCardContainer {
    data: INewsCard[],
}

const test: INewsCard[] = [
    {
        title: "The Callisto Protocol navodno je podbacio u prodaji",
        desc: "Horor avantura The Callisto Protocol navodno je trebala prodati pet milijuna primjeraka da ostvari dobit, što se za sada još uvijek nije dogodilo.",
        date: new Date("2018-05-18T04:00:00.000Z"),
        image: "string",
        suffix: "string",
        author: "string",
    },
];

const NewsCardContainer: React.FC<INewsCardContainer> = ({ data }) => {
    return (
        <div>
            {/*<div className={style.container}>
            <NewsCard tag={test[0].tag} title={test[0].title} image={test[0].image} suffix={test[0].suffix}/>
            </div>*/}
        </div>
    );
}

export default NewsCardContainer;