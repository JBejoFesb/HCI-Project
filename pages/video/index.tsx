import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Head from 'next/head'
import NewsCardContainer from '../../components/cards/news-card-container/news-card-container';
import SidebarContainer from '../../components/sidebar/sidebar-container/sidebar-container';
import PopularNewsCardContainer from '../../components/cards/popular-news-card-container/popular-news-card-container';
import { getAllVideoPosts } from '../api/ContentfulAPI';
import { INewsCard } from '../../components/cards/news-card/news-card';

export interface IVideoPosts {
  videoPosts: INewsCard[],
}

const Videos: React.FC<IVideoPosts> = ({ videoPosts }) => {
  return (
    <>
      <Head>
        <title>HCL Video</title>
      </Head>
      <Header/>
      <div className=' pt-16 pb-20 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900'>
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

  if (videoPosts) return {
    props: { videoPosts: videoPosts },
  }

  return {
    notFound: true,
  };
  
}