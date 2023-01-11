import React from "react";

export interface IPopularNewsCard {
    tag: string,
    title: string,
    image: string,
}

const PopularNewsCard: React.FC<IPopularNewsCard> = ({tag, title, image}) => {
    return (
        <div className="">
            <div className="text-center text-red-500">TAG</div>
        </div>
    );
}

export default PopularNewsCard;