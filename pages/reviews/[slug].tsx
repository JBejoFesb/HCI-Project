import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { getAllReviewSlugs, getNewVideoPosts, getPopularPosts, getReviewPostBySlug } from "../api/ContentfulAPI";
import ReviewPostContent, { IReviewPostContainer } from "../../components/post-content/review-post-content/review-post-content";
import Head from "next/head";

const ReviewPost: React.FC<IReviewPostContainer> = ({ reviewPost, videoPosts, popularPosts  }) => {

    return (
        <>
        <Head>
            <title>{reviewPost.title}</title>
        </Head>
        <Header />
        <div className="pt-[72px] md:pt-24 md:pb-4 flex flex-col items-center bg-slate-900">
            <div className=' flex flex-col items-center'>
                    <ReviewPostContent reviewPost={reviewPost} videoPosts={videoPosts} popularPosts={popularPosts} />
            </div>
        </div>
        <Footer />
        </>
    );
}

export default ReviewPost;

export async function getStaticPaths() {
    const reviews = await getAllReviewSlugs();

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
    const reviewPost = await getReviewPostBySlug(slug);
    const videoPosts = await getNewVideoPosts();
    const popularPosts = await getPopularPosts();

    return {
        props: { reviewPost: reviewPost, videoPosts: videoPosts, popularPosts: popularPosts }
    }
}