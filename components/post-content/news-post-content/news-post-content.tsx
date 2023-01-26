import React from "react";
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import renderOptions from "../render-options";
import { IType, IImage, translateTypes } from "../../../constants/constants";
import TimeSince from "../../time-since/time-since";
import Link from "next/link";

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
        <div className=" flex flex-col bg-slate-800 md:rounded-3xl max-w-[800px]">
            <div className=" flex flex-col pt-5 pr-5 pl-5 pb-5 gap-6 lg:gap-8">
                <h1>{newsPost.title}</h1>
                <h3><Link href='/impressum' className="text-main-orange hover:underline font-semibold cursor-pointer">{newsPost.author}</Link> | <span><TimeSince creation={newsPost.creation} /> | </span><Link href='/news' className=" text-main-orange cursor-pointer hover:underline font-semibold">{translateTypes[newsPost.type.type]}</Link></h3>
                <img className=" w-full max-w-none rounded-xl" src={newsPost.mainImage.url} alt={newsPost.title}/>
                {documentToReactComponents(newsPost.content.json, renderOptions(newsPost.content.links, newsPost.title) as Options)}
            </div>
        </div>
    );
}

export default NewsPostContent;