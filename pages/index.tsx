import styles from '../styles/Home.module.css';
//import homepage modules
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import PopularNewsCard from '../components/cards/popular-news-card/popular-news-card';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header/>
      {/* <PopularNewsCard/> */}
      <Footer/> 
    </>
  )
}
