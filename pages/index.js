import HomeVideoBg from '@/components/HomeVideoBg';
import Head from 'next/head';

import Countries from '@/components/Countries';
import GoToContact from '@/components/goToContact';

export default function Home() {
  return (
    <div className='home-main'>
      <Head>
        <title> Home Page  | Welcome to Roam Craze</title>
        <meta name="description" content="Explore Roam Craze to have an unforgettable journey and enchanting destinations with us." />
      </Head>
       <HomeVideoBg/>
     
      <Countries/>
      <GoToContact/>
    </div>
  );
}
