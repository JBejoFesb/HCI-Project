import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Head from 'next/head';
import popular_news_cards from "../../static-data/popular-news-cards.json";
import PopularNewsCardContainer from '../../components/cards/popular-news-card-container/popular-news-card-container';
import NewsCardContainer from '../../components/cards/news-card-container/news-card-container';
import SidebarContainer from '../../components/sidebar/sidebar-container/sidebar-container';
import { getAllSpecialPosts } from '../api/ContentfulAPI';
import { INewsCard } from '../../components/cards/news-card/news-card';

export interface ISpecialPosts {
  specialPosts: INewsCard[],
}

const Specials: React.FC<ISpecialPosts> = ({ specialPosts }) => {
  return (
    <>
      <Head>
        <title>HCL Specijali</title>
      </Head>
      <Header/>
      <div className=' pt-16 pb-20 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900'>
        <PopularNewsCardContainer data={popular_news_cards.popularNewsCards}/>
        <div className=' flex flex-row justify-between gap-10 pl-5 pr-5'>
          <NewsCardContainer data={specialPosts} showType={true} type={"SPECIJALI"}/>
          <SidebarContainer data={[]} widgets={true}/>
        </div>
      </div>
      <Footer/> 
    </>
  )
}

export default Specials;

export async function getStaticProps() {
  const specialPosts = await getAllSpecialPosts();

  if (specialPosts) return {
    props: { specialPosts: specialPosts },
  }

  return {
    notFound: true,
  };
}