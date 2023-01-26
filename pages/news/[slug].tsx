import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { getNewsPostBySlug, getAllNewsSlugs } from "../api/ContentfulAPI";
import SidebarContainer from "../../components/sidebar/sidebar-container/sidebar-container";
import NewsPostContent, { INewsPostContent, INewsPostContainer } from "../../components/post-content/news-post-content/news-post-content";
import Head from "next/head";

const NewsPost: React.FC<INewsPostContainer> = ({ newsPost }) => {
    return (
        <>
        <Head>
            <title>{newsPost.title}</title>
        </Head>
        <Header/>
        <div className="pt-[72px] md:pt-24 lg:pt-28 2xl:pt-32 md:pb-10 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
            <div className=' flex flex-col items-center'>
                <div className=' flex flex-row justify-between gap-5 2xl:gap-10 lg:pl-5 lg:pr-5 2xl:pl-10 2xl:pr-10'>
                    <NewsPostContent newsPost={newsPost} />
                    <SidebarContainer data={[]} widgets={true}/>
                </div>
            </div>
        </div>
        <Footer />
        </>
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

    return {
        props: { newsPost: newsPost }
    }
}