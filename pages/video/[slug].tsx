import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import VideoPostContent, { IVideoPostContainer } from "../../components/post-content/video-post-content/video-post-content";
import { getVideoPostBySlug, getAllVideoSlugs, getNewVideoPosts, getPopularPosts } from "../api/ContentfulAPI";
import Head from "next/head";
import Layout from "../../layouts/Layout";

const SpecialPost: React.FC<IVideoPostContainer> = ({ videoPost , videoPosts, popularPosts}) => {
    return (
        <Layout title={videoPost.title}>
            <div className="pt-[72px] md:pt-24 md:pb-4 flex flex-col items-center bg-slate-900">
                <div className=' flex flex-col items-center'>
                    <VideoPostContent videoPost={videoPost} videoPosts={videoPosts} popularPosts={popularPosts} />
                </div>
            </div>
        </Layout>
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
    const videoPosts = await getNewVideoPosts();
    const popularPosts = await getPopularPosts();

    return {
        props: { videoPost: videoPost, videoPosts: videoPosts, popularPosts: popularPosts }
    }
}