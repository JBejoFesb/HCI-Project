import NewsCardContainer from '../components/cards/news-card-container/news-card-container';
import SidebarContainer, { ISidebarItem } from '../components/sidebar/sidebar-container/sidebar-container';
import { getAllPosts, getNewVideoPosts, getPopularPosts, getFeaturedPosts } from './api/ContentfulAPI';
import { INewsCard } from '../components/cards/news-card/news-card';
import { ICurrentNews } from '../components/sidebar/parts/current-news/current-news';
import { IPopularNewsCard } from '../components/cards/popular-news-card/popular-news-card';
import Slider from '../components/slider/slider';
import Layout from '../layouts/Layout';

export interface IHome {
  newsPosts: INewsCard[],
  videoPosts: ICurrentNews[],
  popularPosts: ICurrentNews[],
  featuredPosts: IPopularNewsCard[],
}

const Home: React.FC<IHome> = ({ newsPosts, videoPosts, popularPosts, featuredPosts }) => {
  return (
    <Layout title='HCL Gaming Portal'>
      <div className="pt-16 pb-20 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        <Slider featuredPosts={featuredPosts}/>
        <div className=' flex flex-row w-full sm:w-fit justify-between lg:gap-10 lg:px-5'>
          <NewsCardContainer data={newsPosts} />
          <SidebarContainer data={[{data: videoPosts, key: 'video'}, {data: popularPosts, key: 'aktualno'}]} widgets={true}/>
        </div>
      </div>
    </Layout>
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