import React from "react";

export interface IPopularNewsCard {
    tag: string,
    title: string,
    image: string,
    suffix: string
}

const PopularNewsCard: React.FC<IPopularNewsCard> = ({tag, title, image, suffix}) => {
    return (
        <div className=" ">
            <div className="text-center text-red-500">{tag}</div>
            <div>{title}</div>
        </div>
    );
}

export default PopularNewsCard;