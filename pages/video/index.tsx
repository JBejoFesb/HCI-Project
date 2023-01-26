import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Head from 'next/head'
import NewsCardContainer from '../../components/cards/news-card-container/news-card-container';
import SidebarContainer from '../../components/sidebar/sidebar-container/sidebar-container';
import PopularNewsCardContainer from '../../components/cards/popular-news-card-container/popular-news-card-container';
import { getAllVideoPosts, getFeaturedVideoPosts } from '../api/ContentfulAPI';
import { INewsCard } from '../../components/cards/news-card/news-card';
import { IPopularNewsCard } from '../../components/cards/popular-news-card/popular-news-card';

export interface IVideoPosts {
  videoPosts: INewsCard[],
  featuredVideoPosts: IPopularNewsCard[],
}

const Videos: React.FC<IVideoPosts> = ({ videoPosts, featuredVideoPosts }) => {
  return (
    <>
      <Head>
        <title>HCL Video</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header/>
      <div className=' pt-16 pb-20 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900'>
        <PopularNewsCardContainer featuredPosts={featuredVideoPosts} />
        <div className=' flex flex-row w-full sm:w-fit justify-between lg:gap-10 lg:px-5'>
          <NewsCardContainer data={videoPosts} />
          <SidebarContainer data={[]} widgets={true}/>
        </div>
      </div>
      <Footer/> 
    </>
  )
}

export default Videos;

export async function getStaticProps() {
  const videoPosts = await getAllVideoPosts();
  const featuredVideoPosts = await getFeaturedVideoPosts();

  if (videoPosts) return {
    props: { videoPosts: videoPosts, featuredVideoPosts: featuredVideoPosts },
  }

  return {
    notFound: true,
  };
  
}