import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Head from 'next/head'
import PopularNewsCardContainer from '../components/cards/popular-news-card-container/popular-news-card-container';
import NewsCardContainer from '../components/cards/news-card-container/news-card-container';
import SidebarContainer from '../components/sidebar/sidebar-container/sidebar-container';

export default function Home() {
  return (
    <>
      <Head>
        <title>HCL Gaming Portal</title>
      </Head>
      <Header/>
      <div className=' pt-20 pb-20 flex flex-col items-center'>
        <PopularNewsCardContainer data={[]}/>
        <div className=' flex flex-row justify-between gap-10'>
          <NewsCardContainer data={[]} />
          <SidebarContainer />
        </div>
      </div>
      <Footer/>
    </>
  )
}
