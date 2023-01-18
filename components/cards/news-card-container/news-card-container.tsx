import React, { Fragment } from "react";
import { INewsCard } from "../news-card/news-card";
import NewsCard from "../news-card/news-card";
import style from "./news-card-container.module.css";
import MoreNewsButton from "../../buttons/more-news-button/more-news-button";

export interface INewsCardContainer {
    data: INewsCard[],
    showType: boolean,
    type: string,
}

const NewsCardContainer: React.FC<INewsCardContainer> = ({ data, showType, type }) => {
    return (
        <div className=" flex flex-col bg-dirty-white rounded-[30px] w-max-[700px]">
            <div className={style.container}>
                {showType && 
                    <div className={style.mapper}>
                        {type}
                    </div>
                }
                <div className={style.grid_row}>
                    {
                        data.map((card: INewsCard, i: number) => {
                            return (
                                <NewsCard title={card.title} desc={card.desc} date={card.date} image={card.image} suffix={card.suffix} author={card.author} key={`${card.title}-newscard-${i}`}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className=" px-5 py-5">
                <MoreNewsButton />
            </div>
            
        </div>
        
    );
}

export default NewsCardContainer;