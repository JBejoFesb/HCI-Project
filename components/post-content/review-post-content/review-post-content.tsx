import React from "react";
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import renderOptions from "../render-options";
import { IType, IImage, translateTypes } from "../../../constants/constants";
import TimeSince from "../../time-since/time-since";

export interface IReviewPostContainer {
    reviewPost: IReviewPostContent,
}

export interface IReviewPostContent {
    title: string,
    type: IType,
    slug: string,
    author: string,
    mainImage: IImage,
    description: string,
    score: number,
    creation: string,
    content: any,
}

const ReviewPostContent: React.FC<IReviewPostContainer> = ({ reviewPost }) => {
    return (
        <div className=" flex flex-col bg-dirty-white rounded-[30px] max-w-[800px]">
            <div className=" flex flex-col text-black pt-5 pr-5 pl-5 pb-5 gap-8">
                <h1>{reviewPost.title}</h1>
                <p>{reviewPost.author} <TimeSince creation={reviewPost.creation} /> | {translateTypes[reviewPost.type.type]}</p>
                <img className=" w-full max-w-none rounded-xl" src={reviewPost.mainImage.url} alt={reviewPost.title}/>
                {documentToReactComponents(reviewPost.content.json, renderOptions(reviewPost.content.links, reviewPost.title) as Options)}
            </div>
        </div>
    );
}

export default ReviewPostContent;