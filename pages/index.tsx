import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Head from 'next/head'
import PopularNewsCardContainer from '../components/cards/popular-news-card-container/popular-news-card-container';
import NewsCardContainer from '../components/cards/news-card-container/news-card-container';
import SidebarContainer from '../components/sidebar/sidebar-container/sidebar-container';
import news_cards from "../static-data/news-cards.json";
import popular_news_cards from "../static-data/popular-news-cards.json";
import sidebarCards from "../static-data/sidebar-cards.json";
import Slider from '../components/slider/slider';

export default function Home() {
  return (
    <>
      <Head>
        <title>HCL Gaming Portal</title>
      </Head>
      <Header/>
      <div className=' pt-16 pb-20 flex flex-col items-center bg-soft-marine'>
        
        <PopularNewsCardContainer data={popular_news_cards.popularNewsCards}/>
        <div className=' flex flex-row justify-between gap-10 pl-5 pr-5'>
          <NewsCardContainer data={news_cards.newsCards} showType={false} type={""} />
          <SidebarContainer data={sidebarCards.cards} widgets={true}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}
