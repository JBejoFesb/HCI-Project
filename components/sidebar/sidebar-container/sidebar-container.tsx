import React from "react";
import CurrentNewsContainer from "../parts/current-news-container/current-news-container";
import { ICurrentNews } from "../parts/current-news/current-news";

export interface ISidebarContainer {
    data: Array<ISidebarItem>,
}

export interface ISidebarItem {
    key: string,
    cards: Array<ICurrentNews>,
}

const SidebarContainer: React.FC<ISidebarContainer> = ({ data }) => {
    return (
        <div className=" flex flex-col mx-auto w-96 h-fit gap-5">
            {
                data.map((dataPart: ISidebarItem) => {
                    return (
                        <CurrentNewsContainer data={dataPart.cards} key={dataPart.key} />
                    )   
                })
            }
        </div>
    );
}

export default SidebarContainer;