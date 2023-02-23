import React from "react";
import { getNewsPostBySlug, getAllNewsSlugs, getNewVideoPosts, getPopularPosts } from "../api/ContentfulAPI";
import NewsPostContent, { INewsPostContainer } from "../../components/post-content/news-post-content/news-post-content";
import Layout from "../../layouts/Layout";

const NewsPost: React.FC<INewsPostContainer> = ({ newsPost, videoPosts, popularPosts }) => {
    return (
        <Layout title={newsPost.title}>
        <div className="pt-[72px] md:pt-24 md:pb-4 flex flex-col items-center bg-slate-900">
            <div className=' flex flex-col items-center'>
                    <NewsPostContent newsPost={newsPost} videoPosts={videoPosts} popularPosts={popularPosts} />
            </div>
        </div>
        </Layout>
    );
}

export default NewsPost;

export async function getStaticPaths() {
    const news = await getAllNewsSlugs();

    const paths = news.map((newsPost: any) => ({
        params: { slug: newsPost.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context: any) {
    const { slug } = context.params;
    const newsPost = await getNewsPostBySlug(slug);
    const videoPosts = await getNewVideoPosts();
    const popularPosts = await getPopularPosts();

    return {
        props: { newsPost: newsPost, videoPosts: videoPosts, popularPosts: popularPosts }
    }
}