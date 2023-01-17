import React from "react";
import Image from "next/image";
import style from "./current-news.module.css";
import Link from "next/link";
import play from "../../../../public/images/icons/play.png";

export interface ICurrentNews {
    title: string,
    image: string,
    suffix: string,
    video: boolean
}

const CurrentNews: React.FC<ICurrentNews> = ({ title, image, suffix, video }) => {
    return (
        <div className={style.item}>
            <Link href="/news" className=" rounded-[30px]">
                <div className={style.container}>
                    <div className={style.image_container}>
                        <Image src={`/images/currentNews/${image}.${suffix}`}
                        alt={image}
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                        />
                        {video && <Image src={play}
                        alt="play"
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                        />}
                        
                    </div>
                    <div className=" text-base font-medium pl-2 pr-2 pt-1 pb-2 text-bright-text h-32">
                        {title}
                    </div>
                </div>
            </Link>
        </div>
        
    );
}

export default CurrentNews;