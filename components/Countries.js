import Link from "next/link";
import Image from "next/image";


export default function Countries() {
  const countries = [
    { name: "greece", title: "Greece", image: "/greece.jpg" },
    { name: "spain", title: "Spain", image: "/spain.jpg" },
    { name: "turkey", title: "Turkey", image: "/turkey.jpg" },
    { name: "netherlands", title: "Netherlands", image: "/netherland.jpg" },
    { name: "unitedkingdom", title: "United Kingdom", image: "/uk.jpg" },
    { name: "iceland", title: "Iceland", image: "/iceland.jpg" },
  ];
  return (
    <div className="country-main">
      {countries.map(({ name, title, image}) => (
        <div className="country-card" key={name}>
          <Link href={`/${name}`}>
            <Image src={image} width={300} height={400} alt="thumb"/>
            <h2 className="country-h2">{title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
