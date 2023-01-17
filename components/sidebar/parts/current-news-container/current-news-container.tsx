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
                {data[0].video ? "Video" : "Aktualno" }
            </div>
                {
                    data.map((card: ICurrentNews) => {
                        return (
                            <CurrentNews key={`${card.title}-${card.video ? 'video' : 'current'}`} title={card.title} image={card.image} suffix={card.suffix} video={card.video} />
                        )
                    })
                }
        </div>
    );
}

export default CurrentNewsContainer;