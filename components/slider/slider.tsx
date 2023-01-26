import React from "react";
import style from "./slider.module.css";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import PopularNewsCard, { IPopularNewsCard } from "../cards/popular-news-card/popular-news-card";


export interface ISlider {
    featuredPosts: IPopularNewsCard[],
}

const Slider: React.FC<ISlider> = ({ featuredPosts }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        let slider = document.getElementById(`slider`)!;
        slider.scrollLeft = slider.scrollLeft - 670;
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? featuredPosts.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        let slider = document.getElementById(`slider`)!;
        slider.scrollLeft = slider.scrollLeft + 670;
        const isLastSlide = currentIndex === featuredPosts.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    };

    // const goToSlide = (slideIndex: number) => {
    //     setCurrentIndex(slideIndex);

    // };

    return (
        <> 
            <div className={style.slider_container}>

                <div className="flex flex-row items-center space-x-4">
                    <div className={style.slider_button} onClick={prevSlide}><ChevronLeftIcon className="h-8 w-8"/></div>
                    <div id="slider" className={style.slider}>
                        {
                        featuredPosts.map((post: IPopularNewsCard, i:number) => {
                            return (
                                <>  
                                    <PopularNewsCard slug={post.slug} title={post.title} type={post.type} mainImage={post.mainImage} isMain={currentIndex==i} key={`${post.slug}-popularcard`}/>
                                </>
                            )
                        })}
                    </div>
                    <div className={style.slider_button}  onClick={nextSlide}><ChevronRightIcon className="h-8 w-8"/></div>
                </div>

                {/* <div className="hidden justify-center py-2 space-x-4 ">
                    {featuredPosts.map((post: IPopularNewsCard, slideIndex: number) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={currentIndex == slideIndex ? "w-20 h-3 rounded-full bg-main-orange cursor-pointer" : "w-10 h-3 rounded-full bg-slate-900/50 cursor-pointer"}></div>
                    ))}
                </div> */}

            </div>


        </>
    )
}

export default Slider;