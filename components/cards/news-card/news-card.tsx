import React from "react";
import style from "./news-card.module.css";
import Link from "next/link";
import dayjs from 'dayjs'; 
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/hr';

dayjs.extend(relativeTime);
dayjs.locale('hr');

export interface IImage {
    url: string,
}

export interface INewsCard {
    slug: string,
    title: string,
    author: string,
    mainImage: IImage,
    creation: string,
    description: string,
}

const NewsCard: React.FC<INewsCard> = ({ slug, title, author, mainImage, creation, description }) => {
    return (
        <div className={style.grid_item}>
            <Link href={`/news/${slug}`} className={style.link_container}></Link>
            <div className={style.container}
            style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0)), url(${mainImage.url})`,
            backgroundSize: 'cover', backgroundPosition: 'center'}}
            >
                <div className={style.title}>{title}</div>
                <div className={style.desc_container}>
                    <div className={style.extra_text}>
                        <i>{author}</i> | {dayjs(creation).startOf('seconds').fromNow()}
                    </div>
                    <div className={style.desc}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;