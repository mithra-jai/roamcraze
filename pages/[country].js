import { createClient } from "contentful";
import Link from "next/link";
import { Fade } from 'react-slideshow-image';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticPaths() {
  const countries = [
    "greece",
    "spain",
    "turkey",
    "netherlands",
    "unitedkingdom",
    "iceland",
  ];

  const paths = countries.map((country) => ({
    params: { country },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { country } = params;

  const { items } = await client.getEntries({
    content_type: country,
  });

  const contentTypes = items.map((item) => ({
    title: item.fields.title,
    thumbnail: item.fields.thumbnail.fields.file.url,
    description: item.fields.description,
    slug: item.fields.slug,
    mainimage: item.fields.mainimage.fields.file.url,
    imagegallery: item.fields.imagegallery.map(
      (image) => image.fields.file.url
    ),
  }));

  return {
    props: {
      country,
      contentTypes,
    },
  };
}



export default function CountryPage({country, contentTypes}){
  return(
    <>
     <div className="slide-container">
      <Fade className="about-slideshow">
      {contentTypes.map(({ thumbnail, title, slug }) => (
         <div className="dest-list">
           <div key={slug}>
             <div class="px-6 pt-4 pb-2">
               <Link href={`/${country}/${slug}`}>
                 <img class="w-full" src={thumbnail} alt={title} />
                 <div  class="px-6 py-4">
                   <div class="font-bold text-xl mb-2">{title}</div>
                 </div>
               </Link>
             </div>
           </div>
         </div>
       ))}
      </Fade>
    </div>
    
    </>
  )
}

// export default function CountryPage({ country, contentTypes }) {
//   return (
//     <div>
      
//       {contentTypes.map(({ thumbnail, title, slug }) => (
//         <div className="dest-list">
          
//           <div key={slug} class="max-w-sm rounded overflow-hidden shadow-lg">
//             <div class="px-6 pt-4 pb-2">
//               <Link href={`/${country}/${slug}`}>
//                 <img class="w-full" src={thumbnail} alt={title} />
//                 <div class="px-6 py-4">
//                   <div class="font-bold text-xl mb-2">{title}</div>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
