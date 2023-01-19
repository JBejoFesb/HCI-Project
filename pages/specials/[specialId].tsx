import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export interface ISpecialPostContainer {
    post: ISpecialPostContents,
}

export interface ISpecialPostContents {
    title: string,
    date: string,
    author: string,
    desc: string,
    
}

const NewsPost: React.FC<ISpecialPostContainer> = ({ post }) => {

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
            { params: { specialId: '1' } },
            { params: { specialId: '2' } },
            { params: { specialId: '3' } },
        ],
        fallback: false,
    }
}

export default NewsPost;

export function getStaticProps(context: any) {
    return {
        props: {
            specialId: context.params.specialId,
        },
    };
}