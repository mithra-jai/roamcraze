import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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

  return (
    <div className='container mx-auto'>
      <div className='flex justify-between mt-4'>
        {prevSlug && (
          <Link legacyBehavior href={`/${country}/${prevSlug}`}>
            <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Previous
            </a>
          </Link>
        )}
        {nextSlug && (
          <Link legacyBehavior href={`/${country}/${nextSlug}`}>
            <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Next
            </a>
          </Link>
        )}
      </div>
      <Image src={'https:' + mainimage.fields.file.url} width={400} height={200} />
      <h1 className='text-2xl p-4'>{title}</h1>
      <p className='text-base p-6'>
        Description for {title} in {country}: {description}
      </p>
      {imagegallery.map((image) => (
        <Image
          className='p-5'
          src={'https:' + image.fields.file.url}
          width={400}
          height={200}
        />
      ))}
      {country && (
        <div className='flex justify-center mt-4'>
          <Link legacyBehavior href={`/Destination`}>
            <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Back To Destination
            </a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
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
