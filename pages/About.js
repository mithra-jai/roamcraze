import { createClient } from "contentful"
import AboutPage from "@/components/AboutPage"
import Head from "next/head";
import fetchContent from "@/utils/fetchContent";

export async function getStaticProps(){
console.log('Hello static props')

const  aboutCollection  = await fetchContent(`
{
  aboutCollection{
    items{
      whoWeAre
      whatWeOffer
      ourMission
    }
  }
}
`);
return {
  props: {
  abouts: aboutCollection,
  
    revalidate: 1
  }
};
}

export default function About({ abouts }) {

return (
  <div >
      <AboutPage abouts={abouts}/>
    </div>
)
}