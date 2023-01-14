import React from "react";
import style from "./popular-news-card.module.css";
import Link from 'next/link';

export interface IPopularNewsCard {
    tag: string,
    title: string,
    image: string,
    suffix: string
}

const PopularNewsCard: React.FC<IPopularNewsCard> = ({ tag, title, image, suffix }) => {
    return (
        <Link href="/news">
            <div className={style.container}
            style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0)), url(/images/${image}.${suffix})`,
                    backgroundSize: 'cover', backgroundPosition: 'center'}}
            >
                <div className={style.tag_container}>
                    <div className={style.tag}>{tag}</div>
                </div>
                <div className={style.title}>{title}</div>
            </div>
        </Link>
    );
}

export default PopularNewsCard;