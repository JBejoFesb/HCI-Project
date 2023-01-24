import React from "react";
import CurrentNews from "../current-news/current-news";
import { ICurrentNews } from "../current-news/current-news";
import style from "./current-news-container.module.css";

export interface ICurrentNewsContainer {
    data: ICurrentNews[];
}

const CurrentNewsContainer: React.FC<ICurrentNewsContainer> = ({ data }) => {
    return (
        <div className={style.container}>
            <div className={style.title_holder}>
                {data[0].type.type == "video" ? "Video" : "Aktualno" }
            </div>
                {
                    data.map((card: ICurrentNews) => {
                        return (
                            <CurrentNews key={`${card.slug}-${card.type.type == 'video' ? 'video' : 'current'}`} title={card.title} mainImage={card.mainImage} slug={card.slug} type={card.type} />
                        )
                    })
                }
        </div>
    );
}

export default CurrentNewsContainer;