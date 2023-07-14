import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';
import Link from 'next/link';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export default function ContentTypePage({
  mainimage,
  description,
  title,
  imagegallery,
  prevSlug,
  nextSlug,
  country,
}) {
  const router = useRouter();
  const {data:session}= useSession();
  if(session){
  return (
    
    <div className="container">
      <div className="navigation">
        {prevSlug && (
          <Link legacyBehavior href={`/${country}/${prevSlug}`}>
            <a className="navigation-button">Previous</a>
          </Link>
        )}
        {nextSlug && (
          <Link legacyBehavior href={`/${country}/${nextSlug}`}>
            <a className="navigation-button">Next</a>
          </Link>
        )}
      </div>
      <div className="main-image" >
        <Image  src={'https:' + mainimage.fields.file.url} width={400} height={200} />
      </div>
      <h1 className="title">{title}</h1>
      <p className="description">
        Description for {title} in {country}: {description}
      </p>
      <div className="image-gallery">
        {imagegallery.map((image) => (
          <div key={image.sys.id} className="image-item">
            <Image src={'https:' + image.fields.file.url} width={400} height={400} />
          </div>
        ))}
      </div>
      {country && (
        <div className="back-link">
          <Link legacyBehavior href={`/Destination`}>
            <a className="navigation-button">Back To Destination</a>
          </Link>
        </div>
      )}
      
    </div>
  );
      }
      else{
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4"><button onClick={()=> signIn()}>Sign in</button></h2>
              <p className="text-gray-700 mb-4">
                Please sign in to access the content.
              </p>
              <p className="text-gray-700">
                Sign in using your credentials to unlock the full experience.
              </p>
            </div>
          </div>
        );
      }
      }


export async function getServerSideProps({ params }) {
  const { country, contentType } = params;

  try {
    const { items } = await client.getEntries({
      content_type: country,
      limit: 1000,
    });

    const contentTypes = items.map((item) => item.fields.slug);

    const currentIndex = contentTypes.indexOf(contentType);

    if (currentIndex > -1) {
      const entry = items[currentIndex];
      const title = entry.fields.title;
      const description = entry.fields.description;
      const mainimage = entry.fields.mainimage;
      const imagegallery = entry.fields.imagegallery;
      const prevSlug = currentIndex > 0 ? contentTypes[currentIndex - 1] : null;
      const nextSlug =
        currentIndex < contentTypes.length - 1 ? contentTypes[currentIndex + 1] : null;

      return {
        props: {
          title,
          description,
          mainimage,
          imagegallery,
          prevSlug,
          nextSlug,
          country,
        },
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return {
    props: {
      title: 'Data not found',
      description: 'Description not found',
      mainimage: null,
      imagegallery: [],
      prevSlug: null,
      nextSlug: null,
      country: null,
    },
  };
}