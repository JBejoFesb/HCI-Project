import React from "react";
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import renderOptions from "../render-options";
import { IType, IImage, translateTypes } from "../../../constants/constants";
import TimeSince from "../../time-since/time-since";
import Link from "next/link";
import SidebarContainer from "../../../components/sidebar/sidebar-container/sidebar-container";
import { ICurrentNews } from "../../sidebar/parts/current-news/current-news";
import CommentBox from "../../comments/comment-box/comment-box";

export interface ISpecialPostContainer {
    specialPost: ISpecialPostContent,
    videoPosts: ICurrentNews[],
    popularPosts: ICurrentNews[],
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

const SpecialPostContent: React.FC<ISpecialPostContainer> = ({ specialPost, videoPosts, popularPosts }) => {
    return (
        <div className=' flex flex-row xl:flex-col gap-5 lg:pl-5 lg:pr-5 2xl:pl-10 2xl:pr-10'>
            <div className="max-xl:hidden flex flex-col gap-6 xl:max-w-[1150px]">
                <h1>{specialPost.title}</h1>
                <h3><Link href='/impressum' className="text-main-orange hover:underline font-semibold cursor-pointer">{specialPost.author}</Link> | <span><TimeSince creation={specialPost.creation} /> | </span><Link href='/specials' className=" text-main-orange cursor-pointer hover:underline font-semibold">{translateTypes[specialPost.type.type]}</Link></h3>
                <img className=" w-full max-w-none rounded-xl" src={specialPost.mainImage.url} alt={specialPost.title}/>
            </div>
            <div className=" flex flex-col xl:flex-row gap-5 xl:max-w-[1150px]">
                <div className=" flex flex-col p-5 xl:px-2 xl:py-0  gap-6 lg:gap-8 max-w-[750px]">
                    <h1 className="xl:hidden">{specialPost.title}</h1>
                    <h3 className="xl:hidden"><Link href='/impressum' className="text-main-orange hover:underline font-semibold cursor-pointer">{specialPost.author}</Link> | <span><TimeSince creation={specialPost.creation} /> | </span><Link href='/news' className=" text-main-orange cursor-pointer hover:underline font-semibold">{translateTypes[specialPost.type.type]}</Link></h3>
                    <img className=" w-full max-w-none rounded-xl xl:hidden" src={specialPost.mainImage.url} alt={specialPost.title}/>
                    {documentToReactComponents(specialPost.content.json, renderOptions(specialPost.content.links, specialPost.title) as Options)}
                    <CommentBox slug={specialPost.slug} />
                </div>
                <SidebarContainer data={[{data: videoPosts, key: 'video'}, {data: popularPosts, key: 'aktualno'}]} widgets={true}/>
            </div>
        </div>
    );
}

export default SpecialPostContent;