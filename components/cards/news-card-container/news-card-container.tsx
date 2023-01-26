import React, { useEffect, useState } from "react";
import { INewsCard } from "../news-card/news-card";
import NewsCard from "../news-card/news-card";
import style from "./news-card-container.module.css";

export interface INewsCardContainer {
    data: INewsCard[],
}

const NewsCardContainer: React.FC<INewsCardContainer> = ({ data }) => {
    const [postNum, setPostNum] = useState(6);
    const [hasMoreToLoad, setHasMoreToLoad] = useState(6 < data.length);

    function handleButtonClick() {
        console.log("TEST");
        setPostNum(prevPostNum => prevPostNum + 3);
        if (postNum + 3 > data.length) setHasMoreToLoad(false);
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
                                        key={`${card.slug}-card`}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className=" lg:px-5 py-5">
                <button onClick={handleButtonClick} className={`${style.button} ${hasMoreToLoad ? "" : style.button_off} bg-dark-marine`} aria-label="Prikaži više" >
                     PRIKAŽI VIŠE
                </button>
            </div>
            
        </div>
        
    );
}

export default NewsCardContainer;