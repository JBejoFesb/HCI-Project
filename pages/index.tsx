import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Head from 'next/head'
import PopularNewsCardContainer from '../components/cards/popular-news-card-container/popular-news-card-container';
import NewsCardContainer from '../components/cards/news-card-container/news-card-container';
import SidebarContainer, { ISidebarItem } from '../components/sidebar/sidebar-container/sidebar-container';
import { getAllPosts, getNewVideoPosts, getPopularPosts, getFeaturedPosts } from './api/ContentfulAPI';
import { INewsCard } from '../components/cards/news-card/news-card';
import { ICurrentNews } from '../components/sidebar/parts/current-news/current-news';
import { IPopularNewsCard } from '../components/cards/popular-news-card/popular-news-card';

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
      </Head>
      <Header/>
      <div className=' pt-16 pb-20 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900'>
        <PopularNewsCardContainer featuredPosts={featuredPosts}/>
        <div className=' flex flex-row w-max lg:w-fit justify-between gap-10 lg:px-5'>
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