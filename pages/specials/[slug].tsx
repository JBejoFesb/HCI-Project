import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { getAllSpecialSlugs, getSpecialPostBySlug } from "../api/ContentfulAPI";

export interface ISpecialPostContainer {
    specialPost: ISpecialPostContents,
}

export interface ISpecialPostContents {
    slug: string,
    title: string,
    type: string,
    creation: string,
    author: string,
    description: string,
    
}

const SpecialPost: React.FC<ISpecialPostContainer> = ({ specialPost }) => {

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

    return {
        props: { specialPost: specialPost }
    }
}