import { createClient } from "contentful";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";



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





export default function CountryPage({ country, contentTypes }) {
  const CustomArrowPrev = ({ onClick }) => (
    <button className="carouselArrow carouselArrowPrev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: "24px" }} />
    </button>
  );

  const CustomArrowNext = ({ onClick }) => (
    <button className="carouselArrow carouselArrowNext" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "24px" }} />
    </button>
  );

  return (
    <div className="sliderContainer">
      <Head>
        <title>{country} Destinations - Roam Craze</title>
        <meta name ="description" content={`Explore more details about the captivating ${country} with its images.`}></meta>
      </Head>
      <Carousel
        showArrows={true}
        showThumbs={false}
        dynamicHeight={true}
        autoPlay={true}
        interval={3000}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && <CustomArrowPrev onClick={onClickHandler} />
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && <CustomArrowNext onClick={onClickHandler} />
        }
      >
        {contentTypes.map(({ thumbnail, title, slug }) => (
          <Link legacyBehavior key={slug} href={`/${country}/${slug}`}>
            <a>
              <div className="slideItem">
                <img src={thumbnail} alt={title} className="slideImage" />
                <div className="slideTitle">{title}</div> 
              </div>
            </a>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}