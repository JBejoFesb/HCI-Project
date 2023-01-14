import React from "react";
import style from "./news-card.module.css";

export interface INewsCard {
    title: string,
    desc: string,
    date: Date,
    image: string,
    suffix: string,
    author: string,
}

const NewsCard: React.FC<INewsCard> = ({ title, desc, date, author, image, suffix }) => {
    return (
        <div className={style.container}>
            TEST
        </div>
    );
}

export default NewsCard;