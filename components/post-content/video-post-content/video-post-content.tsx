import React from "react";
import LiteYoutubeEmbed from 'react-lite-youtube-embed';
import { IType, IImage, translateTypes } from "../../../constants/constants";
import TimeSince from "../../time-since/time-since";
import Link from "next/link";
import SidebarContainer from "../../../components/sidebar/sidebar-container/sidebar-container";
import { ICurrentNews } from "../../sidebar/parts/current-news/current-news";

export interface IVideoPostContainer {
    videoPost: IVideoPostContent,
    videoPosts: ICurrentNews[],
    popularPosts: ICurrentNews[],
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

const SpecialPostContent: React.FC<IVideoPostContainer> = ({ videoPost, videoPosts, popularPosts }) => {
    return (
        <div className=' flex flex-row xl:flex-col gap-5 lg:pl-5 lg:pr-5 2xl:pl-10 2xl:pr-10'>
            <div className="max-xl:hidden flex flex-col gap-6 xl:max-w-[1150px]">
                <h1>{videoPost.title}</h1>
                <h3><Link href='/impressum' className="text-main-orange hover:underline font-semibold cursor-pointer">{videoPost.author}</Link> | <span><TimeSince creation={videoPost.creation} /> | </span><Link href='/news' className=" text-main-orange cursor-pointer hover:underline font-semibold">{translateTypes[videoPost.type.type]}</Link></h3>
                <LiteYoutubeEmbed id={videoPost.url} title={videoPost.title} />
            </div>
            <div className=" flex flex-col xl:flex-row gap-5 xl:max-w-[1150px]">
                <div className=" flex flex-col p-5 xl:px-2 xl:py-0  gap-6 lg:gap-8 max-w-[750px]">
                    <h1 className="xl:hidden">{videoPost.title}</h1>
                    <h3 className="xl:hidden"><Link href='/impressum' className="text-main-orange hover:underline font-semibold cursor-pointer">{videoPost.author}</Link> | <span><TimeSince creation={videoPost.creation} /> | </span><Link href='/news' className=" text-main-orange cursor-pointer hover:underline font-semibold">{translateTypes[videoPost.type.type]}</Link></h3>
                    <LiteYoutubeEmbed id={videoPost.url} title={videoPost.title} />
                </div>
                <SidebarContainer data={[{data: videoPosts, key: 'video'}, {data: popularPosts, key: 'aktualno'}]} widgets={true}/>
            </div>
        </div>
    );
}

export default SpecialPostContent;