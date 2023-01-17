import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Head from 'next/head'

export default function News() {
  return (
    <>
      <Head>
        <title>Gaming vijesti</title>
      </Head>
      <Header/>
      <div className=' pt-16 pb-20 flex flex-col items-center bg-soft-marine'>
      </div>
      <Footer/> 
    </>
  )
}