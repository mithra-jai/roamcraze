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
  const { country, contentType } = params;

  try {
    // Fetch the entry from Contentful based on country and content type
    const { items } = await client.getEntries({
      content_type: country,
      'fields.slug': contentType,
      limit: 6,
    });

    if (items.length > 0) {
      // Find the matching entry for the specific contentType
      const entry = items.find((item) => item.fields.slug === contentType);

      if (entry) {
        // Get the description from the retrieved entry
        const title = entry.fields.title;
        const description = entry.fields.description;
        const mainimage = entry.fields.mainimage;
        const imagegallery = entry.fields.imagegallery;

        // Return the data as props
        return {
          props: {
            title,
            description,
            mainimage,
            imagegallery,
          },
        };
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  // If the data is not found or an error occurs, return a default value
  return {
    props: {
      title: 'Data not found',
      description: 'Description not found',
      mainimage: null,
      imagegallery: [],
    },
  };
}