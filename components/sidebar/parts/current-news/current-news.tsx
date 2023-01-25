import React from "react";
import Image from "next/image";
import style from "./current-news.module.css";
import Link from "next/link";
import play from "../../../../public/images/icons/play.png";
import { IImage, IType } from "../../../../constants/constants";

export interface ICurrentNews {
    title: string,
    slug: string,
    mainImage: IImage,
    type: IType,
}

const CurrentNews: React.FC<ICurrentNews> = ({ title, slug, mainImage, type}) => {
    return (
        <div className={style.item}>
            <Link href={`/${type.type == "news" || type.type == "video" ? type.type : type.type + 's'}/${slug}`} className=" rounded-[30px]" aria-label={`Pročitajte više o ${title}`}>
                <div className={style.container}>
                    <div className={style.image_container}>
                        <Image src={mainImage.url}
                        alt={slug}
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                        />
                        {(type.type == "video") && <Image src={play}
                        alt="play"
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                        />}
                        
                    </div>
                    <div className={`${style.title} pt-1 pb-2 text-bright-text`}>
                        {title}
                    </div>
                </div>
            </Link>
        </div>
        
    );
}

export default CurrentNews;