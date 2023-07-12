import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import Image from 'next/image';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function ContentTypePage({ mainimage,description,title,imagegallery }) {
  const router = useRouter();
  const { country} = router.query;

  return (
    <div className='sm:container sm:mx-auto'>
      <Image 
      src = {'https:'+ mainimage.fields.file.url}
      width={400}
      height={200}
     />
      <h1 className='text-2xl p-4'>{title}</h1>
      <p className='text-base p-6'>Description for {title} in {country}: {description}</p>
      {imagegallery.map((image)=>(
        <Image className='p-5' src={"https:" + image.fields.file.url}  width={400}
        height={200}/>
      ))}
      {/* <Image src= {"https:" + imagegallery.map((image) => image.fields.file.url)}
       width={400}
       height={200}/> */}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { country, contentTypes } = params;

  try {
    // Fetch the entry from Contentful based on country and content type
    const { items } = await client.getEntries({
      content_type: country,
      'fields.title': contentTypes,
      limit: 6,
    });

    if (items.length > 0) {
      // Get the description from the retrieved entry
      const title = items[0].fields.title
      const description = items[0].fields.description;
      const mainimage = items[0].fields.mainimage
      const imagegallery = items[0].fields.imagegallery 
      console.log(imagegallery)
      // Return the description as a prop
      return {
        props: {
            title,
          description,
          mainimage,
          imagegallery,
        },
      };
    }
  } catch (error) {
    console.error('Error fetching description:', error);
  }

  // If the description is not found or an error occurs, return a default value
  return {
    props: {
      description: 'Description not found',
    },
  };
}
