import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Head from 'next/head'
import PopularNewsCardContainer from '../components/cards/popular-news-card-container/popular-news-card-container';
import NewsCardContainer from '../components/cards/news-card-container/news-card-container';
import SidebarContainer, { ISidebarItem } from '../components/sidebar/sidebar-container/sidebar-container';
import popular_news_cards from "../static-data/popular-news-cards.json";
import sidebarCards from "../static-data/sidebar-cards.json";
import Slider from '../components/slider/slider';
import { getAllPosts, getNewVideoPosts, getPopularPosts } from './api/ContentfulAPI';
import { INewsCard } from '../components/cards/news-card/news-card';
import { ICurrentNews } from '../components/sidebar/parts/current-news/current-news';

export interface IHome {
  newsPosts: INewsCard[],
  videoPosts: ICurrentNews[],
  popularPosts: ICurrentNews[],
}

const Home: React.FC<IHome> = ({ newsPosts, videoPosts, popularPosts }) => {
  return (
    <>
      <Head>
        <title>HCL Gaming Portal</title>
      </Head>
      <Header/>
      <div className=' pt-16 pb-20 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900'>
        <PopularNewsCardContainer data={popular_news_cards.popularNewsCards}/>
        <div className=' flex flex-row justify-between gap-10 pl-5 pr-5'>
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

  return {
    props: { newsPosts: newsPosts, videoPosts: videoPosts, popularPosts: popularPosts },
  };
}