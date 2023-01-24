import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SidebarContainer from "../../components/sidebar/sidebar-container/sidebar-container";
import { getAllReviewSlugs, getReviewPostBySlug } from "../api/ContentfulAPI";
import ReviewPostContent, { IReviewPostContainer } from "../../components/post-content/review-post-content/review-post-content";

const ReviewPost: React.FC<IReviewPostContainer> = ({ reviewPost }) => {

    return (
        <>
        <Header />
        <div className="pt-16 pb-20 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
            <div className=' pt-20 pb-20 flex flex-col items-center'>
                <div className=' flex flex-row justify-between gap-10 pl-5 pr-5'>
                    <ReviewPostContent reviewPost={reviewPost} />
                    <SidebarContainer data={[]} widgets={true}/>
                </div>
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

    return {
        props: { reviewPost: reviewPost }
    }
}