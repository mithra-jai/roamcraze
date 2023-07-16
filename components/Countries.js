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
    <div className="container mx-auto py-20 px-8">
     <h1 className="text-center mb-10 text-4xl ">Destinations</h1>
    <div className="grid lg:grid-cols-3 gap-6">
      {countries.map(({ name, title, image }) => (
        <div className="shadow-lg rounded-lg" key={name}>
          <Link href={`/${name}`}>
            <Image className="rounded-t-lg" src={image} height={500} width={800} alt="thumb" />
          </Link>
          <div className="p-5">
            <h2 className="text-3xl font-bold mb-3">{title}</h2>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}
