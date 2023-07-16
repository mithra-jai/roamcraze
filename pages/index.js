import HomeVideoBg from "@/components/HomeVideoBg";
import Head from "next/head";

import Countries from "@/components/Countries";
import GoToContact from "@/components/goToContact";

export default function Home() {
  return (
    <div className="home-main">
      <Head>
        <title> Home Page | Welcome to Roam Craze</title>
        <meta
          name="description"
          content="Explore Roam Craze to have an unforgettable journey and enchanting destinations with us."
        />
      </Head>
      <HomeVideoBg />
      <div className="welcome-div">
        <h1 className="welcome-h1">Welcome</h1>
        <p className="welcome-p">
          At RoamCraze, we are passionate about exploring the world and sharing
          our travel experiences with fellow adventurers like you. Our goal is
          to inspire and guide you in your journey to discover new destinations,
          cultures, and experiences.
          
          Discover the world with RoamCraze, your ultimate travel companion. We
          are passionate about creating unforgettable travel experiences and
          connecting travelers with incredible destinations. Whether you're an
          adventure seeker, a cultural explorer, or a leisure traveler, we have
          something special for you. Explore our handpicked collection of
          destinations and embark on a journey of a lifetime. From pristine
          beaches to towering mountains, from bustling cities to remote
          wilderness, we curate the most captivating and diverse destinations
          across the globe. Immerse yourself in different cultures, savor
          mouthwatering cuisine, and create lifelong memories.
        </p>
      </div>
      <div className="home-countries">
      <Countries />
      </div>
      <GoToContact />
    </div>
  );
}
