import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Head from 'next/head'
import PopularNewsCardContainer from '../../components/cards/popular-news-card-container/popular-news-card-container';
import NewsCardContainer from '../../components/cards/news-card-container/news-card-container';
import SidebarContainer from '../../components/sidebar/sidebar-container/sidebar-container';
import { getAllReviewPosts, getFeaturedReviewPosts } from '../api/ContentfulAPI';
import { INewsCard } from '../../components/cards/news-card/news-card';
import { IPopularNewsCard } from '../../components/cards/popular-news-card/popular-news-card';

export interface IReviewPosts {
  reviewPosts: INewsCard[],
  featuredReviewPosts: IPopularNewsCard[],
}

const Reviews: React.FC<IReviewPosts> = ({ reviewPosts, featuredReviewPosts }) => {
  return (
    <>
      <Head>
        <title>HCL Recenzije</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header/>
      <div className=' pt-16 pb-20 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900'>
        <PopularNewsCardContainer featuredPosts={featuredReviewPosts} />
        <div className=' flex flex-row w-full sm:w-fit justify-between lg:gap-10 lg:px-5'>
          <NewsCardContainer data={reviewPosts} />
          <SidebarContainer data={[]} widgets={true}/>
        </div>
      </div>
      <Footer/> 
    </>
  )
}

export default Reviews;

export async function getStaticProps() {
  const reviewPosts = await getAllReviewPosts();
  const featuredReviewPosts = await getFeaturedReviewPosts();

  if (reviewPosts) return {
    props: { reviewPosts: reviewPosts, featuredReviewPosts: featuredReviewPosts },
  }

  return {
    notFound: true,
  };
}