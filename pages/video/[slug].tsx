import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SidebarContainer from "../../components/sidebar/sidebar-container/sidebar-container";
import { getAllVideoSlugs, getVideoPostBySlug } from "../api/ContentfulAPI";
import VideoPostContent, { IVideoPostContainer } from "../../components/post-content/video-post-content/video-post-content";

const SpecialPost: React.FC<IVideoPostContainer> = ({ videoPost }) => {
    return (
        <>
        <Header />
        <div className="pt-16 pb-20 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
            <div className=' pt-20 pb-20 flex flex-col items-center'>
                <div className=' flex flex-row justify-between gap-10 pl-5 pr-5'>
                    <VideoPostContent videoPost={videoPost} />
                    <SidebarContainer data={[]} widgets={true}/>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default SpecialPost;

export async function getStaticPaths() {
    const videos = await getAllVideoSlugs();

    const paths = videos.map((videoPost: any) => ({
        params: { slug: videoPost.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context: any) {
    const { slug } = context.params;
    const videoPost = await getVideoPostBySlug(slug);

    return {
        props: { videoPost: videoPost }
    }
}