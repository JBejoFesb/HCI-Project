import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Head from 'next/head';
import NewsCardContainer from '../../components/cards/news-card-container/news-card-container';
import SidebarContainer from '../../components/sidebar/sidebar-container/sidebar-container';
import PopularNewsCardContainer from '../../components/cards/popular-news-card-container/popular-news-card-container';
import news_cards from "../../static-data/news-cards.json";
import popular_news_cards from "../../static-data/popular-news-cards.json";
import { getAllNewsPosts } from "../api/ContentfulAPI";
import { INewsCard } from '../../components/cards/news-card/news-card';

export interface NewsPosts {
  newsPosts: INewsCard[],
}

const News: React.FC<NewsPosts> = ({ newsPosts }) => {
  return (
    <>
      <Head>
        <title>HCL Vijesti</title>
      </Head>
      <Header/>
      <div className=' pt-16 pb-20 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900'>
        <PopularNewsCardContainer data={popular_news_cards.popularNewsCards}/>
        <div className=' flex flex-row justify-between gap-10 pl-5 pr-5'>
          <NewsCardContainer data={newsPosts} showType={true} type={"VIJESTI"}/>
          <SidebarContainer data={[]} widgets={true}/>
        </div>
      </div>
      <Footer/> 
    </>
  );
}

export default News;

export async function getStaticProps() {
  const newsPosts = await getAllNewsPosts();

  return {
    props: { newsPosts: newsPosts },
  };
}