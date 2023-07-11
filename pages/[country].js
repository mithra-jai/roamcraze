import { createClient } from 'contentful';
import Link from 'next/link';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const countries = ['greece', 'spain', 'turkey', 'netherlands', 'unitedkingdom', 'iceland'];

  const paths =  countries.map((country) => ({
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
    imagegallery: item.fields.imagegallery.map((image) => image.fields.file.url),
  }));

  return {
    props: {
      country,
      contentTypes,
    },
  };
}

export default function CountryPage({ country, contentTypes }) {
  return (
    <div>
      <h1>{country}</h1>
      {contentTypes.map(({  thumbnail, title, slug }) => (
        <div key={slug}>
          <Link legacyBehavior href={`/${country}/${slug}`}>
            <a>
              <img src={thumbnail} alt={title} />
              <h3>{title}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
