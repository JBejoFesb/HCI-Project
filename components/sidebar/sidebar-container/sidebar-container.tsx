import React from "react";
import CurrentNewsContainer from "../parts/current-news-container/current-news-container";
import { ICurrentNews } from "../parts/current-news/current-news";
import discord from "../../../public/images/sidebar/discord-widget.png";
import merch from "../../../public/images/sidebar/merch-widget.png";
import Image from "next/image";

export interface ISidebarContainer {
    data: Array<ISidebarItem>,
    widgets: boolean,
}

export interface ISidebarItem {
    key: string,
    cards: Array<ICurrentNews>,
}

const SidebarContainer: React.FC<ISidebarContainer> = ({ data, widgets }) => {
    return (
        <div className=" flex flex-col mx-auto w-96 h-fit gap-5">
            {
                data.map((dataPart: ISidebarItem) => {
                    return (
                        <CurrentNewsContainer data={dataPart.cards} key={dataPart.key} />
                    )   
                })
            }
            { widgets && 
                <Image src={discord} 
                alt="Discord"
                style={{
                    objectFit: "cover",
                }}/>
            }
            {
                widgets &&
                <Image src={merch} 
                alt="Merch"
                style={{
                    objectFit: "cover",
                }}/>
            }
        </div>
    );
}

export default SidebarContainer;