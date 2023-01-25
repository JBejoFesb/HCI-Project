import React, { useState } from "react";
import { INewsCard } from "../news-card/news-card";
import NewsCard from "../news-card/news-card";
import style from "./news-card-container.module.css";

export interface INewsCardContainer {
    data: INewsCard[],
}

const NewsCardContainer: React.FC<INewsCardContainer> = ({ data }) => {
    const [postNum, setPostNum] = useState(6);
    function handleButtonClick() {
        setPostNum(prevPostNum => prevPostNum + 3);
    }

    return (
        <div className={style.holder}>
            <div className={style.container}>
                <div className={`${style.grid_row}`}>
                    {
                        data.slice(0, postNum).map((card: INewsCard) => {
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
            <div className=" lg:px-5 py-5">
                <button onClick={handleButtonClick} className={`${style.button} bg-dark-marine`}>
                     Više vijesti...
                </button>
            </div>
            
        </div>
        
    );
}

export default NewsCardContainer;