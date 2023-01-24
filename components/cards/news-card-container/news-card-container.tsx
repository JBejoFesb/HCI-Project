import React, { Fragment } from "react";
import { INewsCard } from "../news-card/news-card";
import NewsCard from "../news-card/news-card";
import style from "./news-card-container.module.css";
import MoreNewsButton from "../../buttons/more-news-button/more-news-button";

export interface INewsCardContainer {
    data: INewsCard[],
}

const NewsCardContainer: React.FC<INewsCardContainer> = ({ data }) => {
    return (
        <div className={style.holder}>
            <div className={style.container}>
                <div className={`${style.grid_row}`}>
                    {
                        data.map((card: INewsCard) => {
                            return (
                                <NewsCard slug={card.slug} 
                                        title={card.title} 
                                        description={card.description} 
                                        creation={card.creation} 
                                        mainImage={card.mainImage} 
                                        author={card.author} 
                                        type={card.type}
                                        key={`${card.slug}`}/>
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