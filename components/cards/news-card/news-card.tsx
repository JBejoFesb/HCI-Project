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
        <Link href="/news">
            <div className={style.container}
            style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0)), url(/images/${image}.${suffix})`,
            backgroundSize: 'cover', backgroundPosition: 'center'}}
            >
                <div className={style.title}>{title}</div>
                <div className={style.desc_container}>
                    <div className={style.extra_text}>
                        {dayjs(date).startOf('seconds').fromNow()}
                    </div>
                    {desc}
                </div>
            </div>
        </Link>
    );
}

export default NewsCard;