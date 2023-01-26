import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SpecialPostContent, { ISpecialPostContainer } from "../../components/post-content/special-post-content/special-post-content";
import { getSpecialPostBySlug, getAllSpecialSlugs, getNewVideoPosts, getPopularPosts } from "../api/ContentfulAPI";
import Head from "next/head";

const SpecialPost: React.FC<ISpecialPostContainer> = ({ specialPost, videoPosts, popularPosts }) => {
    return (
        <>
        <Head>
            <title>{specialPost.title}</title>
        </Head>
        <Header />
        <div className="pt-[72px] md:pt-24 md:pb-4 flex flex-col items-center bg-slate-900">
            <div className=' flex flex-col items-center'>
                <SpecialPostContent specialPost={specialPost} videoPosts={videoPosts} popularPosts={popularPosts} />
            </div>
        </div>
        <Footer />
        </>
    );
}

export default SpecialPost;

export async function getStaticPaths() {
    const reviews = await getAllSpecialSlugs();

    const paths = reviews.map((reviewPost: any) => ({
        params: { slug: reviewPost.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context: any) {
    const { slug } = context.params;
    const specialPost = await getSpecialPostBySlug(slug);
    const videoPosts = await getNewVideoPosts();
    const popularPosts = await getPopularPosts();

    return {
        props: { specialPost: specialPost , videoPosts: videoPosts, popularPosts: popularPosts }
    }
}