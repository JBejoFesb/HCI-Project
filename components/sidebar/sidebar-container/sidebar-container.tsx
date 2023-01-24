import React from "react";
import CurrentNewsContainer, { ICurrentNewsContainer } from "../parts/current-news-container/current-news-container";
import style from "./sidebar-container.module.css";
import { ICurrentNews } from "../parts/current-news/current-news";
import discord from "../../../public/images/sidebar/discord-widget.png";
import merch from "../../../public/images/sidebar/merch-widget.png";
import Image from "next/image";
import Link from "next/link";

export interface ISidebarContainer {
    data: ISidebarItem[],
    widgets: boolean,
}

export interface ISidebarItem {
    data: ICurrentNews[],
    key: string,
}

const SidebarContainer: React.FC<ISidebarContainer> = ({ data, widgets }) => {
    
    return (
        <div className={style.container}>
            {
                data.map((dataPart: ISidebarItem) => {
                    return (
                        <CurrentNewsContainer data={dataPart.data} key={`${dataPart.key}-card`} />
                    )   
                })
            }
            { widgets && 
                <div className={style.widget}>
                    <Link href="https://www.discord.gg/gkajsxu">
                        <Image src={discord} 
                        alt="Discord"
                        style={{
                            objectFit: "cover",
                        }}/>
                    </Link>
                </div>
            }
            {
                widgets &&
                <div className={style.widget}>
                    <Link href="https://shop.hcl.hr/">
                        <Image src={merch} 
                        alt="Merch"
                        style={{
                            objectFit: "cover",
                        }}/>
                    </Link>
                </div>
            }
        </div>
    );
}

export default SidebarContainer;