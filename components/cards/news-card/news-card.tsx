import React from "react";
import style from "./news-card.module.css";
import Link from "next/link";
import dayjs from 'dayjs'; 
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/hr';

dayjs.extend(relativeTime);
dayjs.locale('hr');

export interface INewsCard {
    title: string,
    desc: string,
    date: string,
    image: string,
    suffix: string,
    author: string,
}

const NewsCard: React.FC<INewsCard> = ({ title, desc, date, author, image, suffix }) => {
    return (
        <div className={style.grid_item}>
            <Link href="/news" className={style.link_container}></Link>
            <div className={style.container}
            style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0)), url(/images/newsCards/${image}.${suffix})`,
            backgroundSize: 'cover', backgroundPosition: 'center'}}
            >
                <div className={style.title}>{title}</div>
                <div className={style.desc_container}>
                    <div className={style.extra_text}>
                        <i>{author}</i> | {dayjs(date).startOf('seconds').fromNow()}
                    </div>
                    <div className={style.desc}>
                        {desc}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;