import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export interface INewsPostContainer {
    post: INewsPostContents,
}

export interface INewsPostContents {
    title: string,
    date: string,
    author: string,
    desc: string,
    
}

const NewsPost: React.FC<INewsPostContainer> = ({ post }) => {

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
            { params: { newsId: '1' } },
            { params: { newsId: '2' } },
            { params: { newsId: '3' } },
        ],
        fallback: false,
    }
}

export default NewsPost;

export function getStaticProps(context: any) {
    return {
        props: {
            newsId: context.params.newsId,
        },
    };
}