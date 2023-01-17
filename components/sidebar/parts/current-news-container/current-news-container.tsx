import React from "react";
import CurrentNews from "../current-news/current-news";
import { ICurrentNews } from "../current-news/current-news";

export interface ICurrentNewsContainer {
    data: ICurrentNews[];
}

const test: ICurrentNews[] = [
    {
        title: "The Callisto Protocol navodno je podbacio u prodaji",
        image: "cal",
        suffix: "jpg",
    },
];

const CurrentNewsContainer: React.FC<ICurrentNewsContainer> = ({}) => {
    return (
        <div className=" bg-dirty-white rounded-[30px] pt-5">
            <CurrentNews title={test[0].title} image={test[0].image} suffix={test[0].suffix} />
            <CurrentNews title={test[0].title} image={test[0].image} suffix={test[0].suffix} />
            <CurrentNews title={test[0].title} image={test[0].image} suffix={test[0].suffix} />
        </div>
    );
}

export default CurrentNewsContainer;