import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { IImage, IType } from "../cards/news-card/news-card";
import Image from "next/image";

export interface INewsPostContainer {
    data: INewsPostContent,
}

export interface INewsPostContent {
    title: string,
    type: IType,
    slug: string,
    author: string,
    mainImage: IImage,
    description: string,
    content: any,
}

const PostContent: React.FC<INewsPostContainer> = ({data}) => {
    console.log(data.content.json.content[4]);
    return (
        <div className=" flex flex-col bg-dirty-white rounded-[30px] max-w-[800px]">
            <div className=" flex flex-col text-black pt-5 pr-5 pl-5 pb-5 gap-8">
                <img className="w-full max-w-none rounded-xl" src={data.mainImage.url} alt={data.title}/>
                {documentToReactComponents(data.content.json)}
            </div>
        </div>
    );
}

export default PostContent;