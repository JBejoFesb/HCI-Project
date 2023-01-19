import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export interface IReviewPostContainer {
    post: IReviewPostContents,
}

export interface IReviewPostContents {
    title: string,
    date: string,
    author: string,
    desc: string,
    
}

const NewsPost: React.FC<IReviewPostContainer> = ({ post }) => {

    return (
        <>
        <Header />
        <div>
            testing <span className=" text-red-500">{}</span>
        </div>
        <Footer />
        </>
    );
}

export function getStaticPaths() {
    return {
        paths: [
            { params: { reviewId: '1' } },
            { params: { reviewId: '2' } },
            { params: { reviewId: '3' } },
        ],
        fallback: false,
    }
}

export default NewsPost;

export function getStaticProps(context: any) {
    return {
        props: {
            reviewId: context.params.reviewId,
        },
    };
}