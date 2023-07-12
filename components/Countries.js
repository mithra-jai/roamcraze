import Link from "next/link";
export default function Countries() {
  const countries = [
    { name: "greece", title: "Greece" },
    { name: "spain", title: "Spain" },
    { name: "turkey", title: "Turkey" },
    { name: "netherlands", title: "Netherlands" },
    { name: "unitedkingdom", title: "United Kingdom" },
    { name: "iceland", title: "Iceland" },
  ];
  return (
    <div>
      {countries.map(({ name, title }) => (
        <div key={name}>
         <h2>{title}</h2>
          <Link href={`/${name}`} > View 
            {/* <a>
              <img src={`/images/${name}.jpg`} alt={title} />
            </a> */}
          </Link>
        </div>
      ))}
    </div>
  );
}
