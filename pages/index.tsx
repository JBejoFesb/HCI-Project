import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Head from 'next/head'
import NewsCardContainer from '../components/cards/news-card-container/news-card-container';
import SidebarContainer, { ISidebarItem } from '../components/sidebar/sidebar-container/sidebar-container';
import { getAllPosts, getNewVideoPosts, getPopularPosts, getFeaturedPosts } from './api/ContentfulAPI';
import { INewsCard } from '../components/cards/news-card/news-card';
import { ICurrentNews } from '../components/sidebar/parts/current-news/current-news';
import { IPopularNewsCard } from '../components/cards/popular-news-card/popular-news-card';
import Slider from '../components/slider/slider';

export interface IHome {
  newsPosts: INewsCard[],
  videoPosts: ICurrentNews[],
  popularPosts: ICurrentNews[],
  featuredPosts: IPopularNewsCard[],
}

const Home: React.FC<IHome> = ({ newsPosts, videoPosts, popularPosts, featuredPosts }) => {
  return (
    <>
      <Head>
        <title>HCL Gaming Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header/>
      <div className="pt-16 pb-20 flex flex-col items-center  bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        <Slider featuredPosts={featuredPosts}/>
        <div className=' flex flex-row w-full sm:w-fit justify-between lg:gap-10 lg:px-5'>
          <NewsCardContainer data={newsPosts} />
          <SidebarContainer data={[{data: videoPosts, key: 'video'}, {data: popularPosts, key: 'aktualno'}]} widgets={true}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home;

export async function getStaticProps() {
  const newsPosts = await getAllPosts();
  const videoPosts = await getNewVideoPosts();
  const popularPosts = await getPopularPosts();
  const featuredPosts = await getFeaturedPosts();

  return {
    props: { newsPosts: newsPosts, videoPosts: videoPosts, popularPosts: popularPosts, featuredPosts: featuredPosts },
  };
}