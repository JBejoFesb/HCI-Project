import React from "react";
import style from "./popular-news-card-container.module.css";
import { IPopularNewsCard } from "../popular-news-card/popular-news-card";
import PopularNewsCard from "../popular-news-card/popular-news-card";

export interface IPopularNewsCardContainer {
    featuredPosts: IPopularNewsCard[],
}

const PopularNewsCardContainer: React.FC<IPopularNewsCardContainer> = ({ featuredPosts }) => {
    return (
        <div className={style.container}>
            {
                featuredPosts.map((post: IPopularNewsCard, i:number) => {
                    return (
                        <PopularNewsCard slug={post.slug} title={post.title} type={post.type} mainImage={post.mainImage} isMain={i == 0 ? true : false} key={`${post.slug}-popular-card`}/>
                    )
                })
            }
        </div>
        
    );
}

export default PopularNewsCardContainer;