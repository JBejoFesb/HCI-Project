import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { getAllVideoSlugs, getVideoPostBySlug } from "../api/ContentfulAPI";

export interface IVideoPostContainer {
    videoPost: IVideoPostContents,
}

export interface IVideoPostContents {
    slug: string,
    title: string,
    type: string,
    creation: string,
    author: string,
    description: string,
}

const SpecialPost: React.FC<IVideoPostContainer> = ({ videoPost }) => {

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

export default SpecialPost;

export async function getStaticPaths() {
    const videos = await getAllVideoSlugs();

    const paths = videos.map((videoPost: any) => ({
        params: { slug: videoPost.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context: any) {
    const { slug } = context.params;
    const videoPost = await getVideoPostBySlug(slug);

    return {
        props: { videoPost: videoPost }
    }
}