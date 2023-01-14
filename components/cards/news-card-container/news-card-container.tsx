import React, { Fragment } from "react";
import { INewsCard } from "../news-card/news-card";
import NewsCard from "../news-card/news-card";
import style from "./news-card-container.module.css";
import MoreNewsButton from "../../buttons/more-news-button/more-news-button";

export interface INewsCardContainer {
    data: INewsCard[],
}

const test: INewsCard[] = [
    {
        title: "The Callisto Protocol navodno je podbacio u prodaji",
        desc: "Horor avantura The Callisto Protocol navodno je trebala prodati pet milijuna primjeraka da ostvari dobit, što se za sada još uvijek nije dogodilo.",
        date: "2023-01-14 11:00",
        image: "cal",
        suffix: "jpg",
        author: "Lovro Maroševac",
    },
];

const NewsCardContainer: React.FC<INewsCardContainer> = ({ data }) => {
    return (
        <div className=" flex flex-col">
            <div className={style.container}>
                <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
                <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
                <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
                <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
                <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
                <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
                <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
                <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
                <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
            </div>
            <MoreNewsButton />
        </div>
        
    );
}

export default NewsCardContainer;