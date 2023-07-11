import Link from 'next/link';

const countries = [
  { name: 'greece', title: 'Greece' },
  { name: 'spain', title: 'Spain' },
  { name: 'turkey', title: 'Turkey' },
  { name: 'netherlands', title: 'Netherlands' },
  { name: 'unitedkingdom', title: 'United Kingdom' },
  { name: 'iceland', title: 'Iceland' },
];

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {countries.map(({ name, title }) => (
        <div key={name}>
          <h2>{title}</h2>
          <Link href={`/${name}`} legacyBehavior>
            <a>
              <img src={`/images/${name}.jpg`} alt={title} />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
