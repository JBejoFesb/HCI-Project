import React from "react";
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import renderOptions from "../render-options";
import { IType, IImage, translateTypes } from "../../../constants/constants";
import TimeSince from "../../time-since/time-since";

export interface ISpecialPostContainer {
    specialPost: ISpecialPostContent,
}

export interface ISpecialPostContent {
    title: string,
    type: IType,
    slug: string,
    author: string,
    mainImage: IImage,
    description: string,
    creation: string,
    content: any,
}

const SpecialPostContent: React.FC<ISpecialPostContainer> = ({ specialPost }) => {
    return (
        <div className=" flex flex-col bg-dirty-white rounded-[30px] max-w-[800px]">
            <div className=" flex flex-col text-black pt-5 pr-5 pl-5 pb-5 gap-8">
                <h1>{specialPost.title}</h1>
                <p>{specialPost.author} <TimeSince creation={specialPost.creation} /> | {translateTypes[specialPost.type.type]}</p>
                <img className=" w-full max-w-none rounded-xl" src={specialPost.mainImage.url} alt={specialPost.title}/>
                {documentToReactComponents(specialPost.content.json, renderOptions(specialPost.content.links) as Options)}
            </div>
        </div>
    );
}

export default SpecialPostContent;