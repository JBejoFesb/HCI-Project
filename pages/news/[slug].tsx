import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { getNewsPostBySlug, getAllNewsSlugs } from "../api/ContentfulAPI";
import SidebarContainer from "../../components/sidebar/sidebar-container/sidebar-container";

export interface INewsPostContainer {
    newsPost: INewsPostContents,
}

export interface INewsPostContents {
    title: string,
    slug: string,
    author: string,
    mainImage: string,
    description: string,
    content: string,
}

const NewsPost: React.FC<INewsPostContainer> = ({ newsPost }) => {

    return (
        <>
        <Header />
        <div className=' pt-20 pb-20 flex flex-col items-center bg-soft-marine'>
            <div className=' flex flex-row justify-between gap-10 pl-5 pr-5'>
            <div>
                <h1>{newsPost.title}</h1>
                           
            </div>
            <SidebarContainer data={[]} widgets={true}/>
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

    console.log(paths);

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