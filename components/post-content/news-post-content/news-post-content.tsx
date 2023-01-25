import React from "react";
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import renderOptions from "../render-options";
import { IType, IImage, translateTypes } from "../../../constants/constants";
import TimeSince from "../../time-since/time-since";

export interface INewsPostContainer {
    newsPost: INewsPostContent,
}

export interface INewsPostContent {
    title: string,
    type: IType,
    slug: string,
    author: string,
    creation: string,
    mainImage: IImage,
    description: string,
    content: any,
}

const NewsPostContent: React.FC<INewsPostContainer> = ({ newsPost }) => {
    return (
        <div className=" flex flex-col bg-dirty-white rounded-[30px] max-w-[800px]">
            <div className=" flex flex-col text-black pt-5 pr-5 pl-5 pb-5 gap-8">
                <h1>{newsPost.title}</h1>
                <p>{newsPost.author} <TimeSince creation={newsPost.creation} /> | {translateTypes[newsPost.type.type]}</p>
                <img className=" w-full max-w-none rounded-xl" src={newsPost.mainImage.url} alt={newsPost.title}/>
                {documentToReactComponents(newsPost.content.json, renderOptions(newsPost.content.links, newsPost.title) as Options)}
            </div>
        </div>
    );
}

export default NewsPostContent;