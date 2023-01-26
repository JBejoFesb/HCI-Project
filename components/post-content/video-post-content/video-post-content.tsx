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
                    <div className="xl:hidden"><LiteYoutubeEmbed  id={videoPost.url} title={videoPost.title} /></div>
                    <div className="bg-slate-800 w-[740px] h-[500px] rounded-xl">
                        <div>
                        <form className="p-5">
                            <div className="mb-6">
                                <h2>Komentari:</h2>
                                <label className="block m-2 text-sm font-medium text-gray-900 dark:text-white">Tvoj email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required></input>
                            </div>
                            <div className="mb-6">
                                <label className="block m-2 text-sm font-medium text-gray-900 dark:text-white">Komentar</label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ostavi komentar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <SidebarContainer data={[{data: videoPosts, key: 'video'}, {data: popularPosts, key: 'aktualno'}]} widgets={true}/>
            </div>
        </div>
    );
}

export default SpecialPostContent;