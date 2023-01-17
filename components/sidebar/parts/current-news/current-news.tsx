import React from "react";
import Image from "next/image";

export interface ICurrentNews {
    title: string,
    image: string,
    suffix: string,
}

const CurrentNews: React.FC<ICurrentNews> = ({ title, image, suffix }) => {
    return (
        <div className=" ">
            <Image src={`/images/currentNews/${image}.${suffix}`}
                width={200}
                height={120}
                alt={image}/>

                
        </div>
    );
}

export default CurrentNews;