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
        <div className=" flex flex-col bg-dirty-white rounded-[30px] min-w-[800px]">
            <div className={style.container}>
                {showType && 
                    <Fragment>
                        <h1 className=" text-dark-text pt-5 pb-3 pl-3 text-xl font-bold">
                            {type}
                        </h1>
                        <hr className=" border-[1px] border-dark-text"></hr>
                    </Fragment>
                    
                }
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