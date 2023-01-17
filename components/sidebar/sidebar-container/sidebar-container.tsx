import React from "react";
import CurrentNewsContainer from "../parts/current-news-container/current-news-container";
import { ICurrentNews } from "../parts/current-news/current-news";

export interface ISidebarContainer {
    data: ICurrentNews[],
}

const newsTest: ICurrentNews[] = [
    {
        title: "The Callisto Protocol navodno je podbacio u prodaji",
        image: "cal",
        suffix: "jpg",
        video: false
    },
    {
        title: "Novosti vezane uz Metal Gear stižu u narednim tjednima",
        image: "metal",
        suffix: "jpg",
        video: false
    },
    {
        title: "Serija The Last of Us imala je drugu najgledaniju premijeru među HBO serijama u zadnjih 13 godina",
        image: "last",
        suffix: "jpg",
        video: false
    },
];

const videoTest: ICurrentNews[] = [
    {
        title: "The Callisto Protocol navodno je podbacio u prodaji",
        image: "cal",
        suffix: "jpg",
        video: true
    },
    {
        title: "Novosti vezane uz Metal Gear stižu u narednim tjednima",
        image: "metal",
        suffix: "jpg",
        video: true
    },
    {
        title: "Serija The Last of Us imala je drugu najgledaniju premijeru među HBO serijama u zadnjih 13 godina",
        image: "last",
        suffix: "jpg",
        video: true
    },
];

const SidebarContainer: React.FC<ISidebarContainer> = ({ data }) => {
    return (
        <div className=" flex flex-col mx-auto w-96 h-fit gap-5">
            <CurrentNewsContainer data={videoTest} />
            <CurrentNewsContainer data={newsTest} />
        </div>
    );
}

export default SidebarContainer;