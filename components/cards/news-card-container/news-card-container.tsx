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
        title: "Novosti vezane uz Metal Gear stižu u narednim tjednima",
        desc: "Jedan od glumaca iz serijala Metal Gear dao je malu naznaku da ćemo uskoro dočekati neke najave vezane uz tu franšizu.",
        date: "2023-01-17 13:00",
        image: "metal",
        suffix: "jpg",
        author: "Zoran Žalac",
    },
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
        <div className=" flex flex-col bg-dirty-white rounded-[30px] w-max-[700px]">
            <div className={style.container}>
                <div className={style.grid_row}>
                    <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
                    <NewsCard title={test[1].title} desc={test[1].desc} date={test[1].date} image={test[1].image} suffix={test[1].suffix} author={test[1].author}/>
                    <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
                    <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
                    <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
                    <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
                    <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
                    <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
                    <NewsCard title={test[0].title} desc={test[0].desc} date={test[0].date} image={test[0].image} suffix={test[0].suffix} author={test[0].author}/>
                </div>
            </div>
            <div className=" px-5 py-5">
                <MoreNewsButton />
            </div>
            
        </div>
        
    );
}

export default NewsCardContainer;