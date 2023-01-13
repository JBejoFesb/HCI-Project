import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Head from 'next/head'
import PopularNewsCardContainer from '../components/cards/popular-news-card-container/popular-news-card-container';

export default function Home() {
  return (
    <>
      <Head>
        <title>HCL Gaming Portal</title>
      </Head>
      <Header/>
      {/*<PopularNewsCardContainer data={[]}/>*/}
      <Footer/> 
    </>
  )
}
