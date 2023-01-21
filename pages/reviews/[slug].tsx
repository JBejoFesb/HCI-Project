import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SidebarContainer from "../../components/sidebar/sidebar-container/sidebar-container";
import { getAllReviewSlugs, getReviewPostBySlug } from "../api/ContentfulAPI";


export interface IReviewPostContainer {
    reviewPost: IReviewPostContents,
}

export interface IReviewPostContents {
    title: string,
    slug: string,
    type: string,
    headline: string,
    creation: string,
    author: string,
    mainImage: string,
    description: string,
    score: number,
    content: string,
}

const ReviewPost: React.FC<IReviewPostContainer> = ({ reviewPost }) => {

    return (
        <>
        <Header />
        <div className=' pt-20 pb-20 flex flex-col items-center bg-soft-marine'>
            <div className=' flex flex-row justify-between gap-10 pl-5 pr-5'>
            <div>
                <h1>{reviewPost.title}</h1>
                           
            </div>
            <SidebarContainer data={[]} widgets={true}/>
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