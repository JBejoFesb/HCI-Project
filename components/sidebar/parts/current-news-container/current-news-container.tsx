import React from "react";
import CurrentNews from "../current-news/current-news";
import { ICurrentNews } from "../current-news/current-news";

export interface ICurrentNewsContainer {
    data: ICurrentNews[];
}

const CurrentNewsContainer: React.FC<ICurrentNewsContainer> = ({ data }) => {
    return (
        <div className=" flex flex-col gap-5 bg-dirty-white rounded-[30px] pt-5 pr-5 pl-5 pb-5 relative">
            <div className=" text-2xl font-bold text-bright-text text-center pt-1 pb-1">
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