import React from "react";
import LiteYoutubeEmbed from 'react-lite-youtube-embed';
import { IType, IImage, translateTypes } from "../../../constants/constants";
import TimeSince from "../../time-since/time-since";

export interface IVideoPostContainer {
    videoPost: IVideoPostContent,
}

export interface IVideoPostContent {
    title: string,
    type: IType,
    slug: string,
    author: string,
    mainImage: IImage,
    description: string,
    creation: string,
    url: string,
}

const SpecialPostContent: React.FC<IVideoPostContainer> = ({ videoPost }) => {
    return (
        <div className=" flex flex-col bg-dirty-white rounded-[30px] max-w-[800px]">
            <div className=" flex flex-col text-black pt-5 pr-5 pl-5 pb-5 gap-8">
                <h1>{videoPost.title}</h1>
                <p>{videoPost.author} <TimeSince creation={videoPost.creation} /> | {translateTypes[videoPost.type.type]}</p>
                <h2>{videoPost.description}</h2>
                <hr />
                <LiteYoutubeEmbed id={videoPost.url} title={videoPost.title} />
            </div>
        </div>
    );
}

export default SpecialPostContent;