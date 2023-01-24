import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SidebarContainer from "../../components/sidebar/sidebar-container/sidebar-container";
import { getAllSpecialSlugs, getSpecialPostBySlug } from "../api/ContentfulAPI";
import SpecialPostContent, { ISpecialPostContainer } from "../../components/post-content/special-post-content/special-post-content";

const SpecialPost: React.FC<ISpecialPostContainer> = ({ specialPost }) => {
    return (
        <>
        <Header />
        <div className="pt-16 pb-20 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
            <div className=' pt-20 pb-20 flex flex-col items-center'>
                <div className=' flex flex-row justify-between gap-10 pl-5 pr-5'>
                    <SpecialPostContent specialPost={specialPost} />
                    <SidebarContainer data={[]} widgets={true}/>
                </div>
            </div>
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