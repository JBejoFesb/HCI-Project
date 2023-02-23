import NewsCardContainer from '../../components/cards/news-card-container/news-card-container';
import SidebarContainer from '../../components/sidebar/sidebar-container/sidebar-container';
import { getAllNewsPosts } from "../api/ContentfulAPI";
import { INewsCard } from '../../components/cards/news-card/news-card';
import Layout from '../../layouts/Layout';

export interface NewsPosts {
  newsPosts: INewsCard[],
}

const News: React.FC<NewsPosts> = ({ newsPosts }) => {
  return (
    <Layout title='HCL Vijesti'>
      <div className=' pt-28 pb-20 flex flex-col items-center bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900'>
        <div className=' flex flex-row w-full sm:w-fit justify-between lg:gap-10 lg:px-5'>
          <NewsCardContainer data={newsPosts} />
          <SidebarContainer data={[]} widgets={true}/>
        </div>
      </div>
    </Layout>
  );
}

export default News;

export async function getStaticProps() {
  const newsPosts = await getAllNewsPosts();

  if (newsPosts) return {
    props: { newsPosts: newsPosts },
  }

  return {
    notFound: true,
  };
}