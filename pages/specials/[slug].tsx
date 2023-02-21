import React from "react";
import SpecialPostContent, { ISpecialPostContainer } from "../../components/post-content/special-post-content/special-post-content";
import { getSpecialPostBySlug, getAllSpecialSlugs, getNewVideoPosts, getPopularPosts } from "../api/ContentfulAPI";
import Layout from "../../layouts/Layout";

const SpecialPost: React.FC<ISpecialPostContainer> = ({ specialPost, videoPosts, popularPosts }) => {
    return (
        <Layout title={specialPost.title}>
        <div className="pt-[72px] md:pt-24 md:pb-4 flex flex-col items-center bg-slate-900">
            <div className=' flex flex-col items-center'>
                <SpecialPostContent specialPost={specialPost} videoPosts={videoPosts} popularPosts={popularPosts} />
            </div>
        </div>
        </Layout>
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