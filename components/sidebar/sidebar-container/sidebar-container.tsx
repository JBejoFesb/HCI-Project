import React from "react";
import CurrentNewsContainer, { ICurrentNewsContainer } from "../parts/current-news-container/current-news-container";
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
}

const SidebarContainer: React.FC<ISidebarContainer> = ({ data, widgets }) => {
    return (
        <div className=" flex flex-col mx-auto w-96 h-fit gap-5">
            {
                data.map((dataPart: ISidebarItem) => {
                    return (
                        <CurrentNewsContainer data={dataPart.data} key={`${dataPart.data[0].type.type}-card`} />
                    )   
                })
            }
            { widgets && 
                <div className=" rounded-[30px]">
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
                <div className=" rounded-[30px]">
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

[[{}, {}, {}],[{}, {}, {}]]