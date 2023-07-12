import Home from "@/components/Home";
import SpainCard from "@/components/SpainCard";
import TurkeyCard from "@/components/TurkeyCard";
import UnitedKingdomCard from "@/components/UnitedKingdomCard";
import { createClient } from "contentful";
import Image from "next/image";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "spain" });
  // const resOne = await client.getEntries({ content_type: "turkey" });
  // const resTwo = await client.getEntries({ content_type: "unitedkingdom" });

  return {
    props: {
      spain: res.items,
      // turkey: resOne.items,
      // unitedkingdom : resTwo.items,
    },
  };
}

export default function HomePage({ spain }) {
  console.log(spain);

  return (
    <div className="recipe-list">
      {spain.map((spains) => (
        <SpainCard key={spains.sys.id} spains={spains} />
      ))}

<Home/>
    </div>
  );
}

// export  function Turkey({ turkey }) {
//   return (
//     <div className="recipe-list">
//       {turkey.map((turkeys) => (
//         <TurkeyCard key={turkeys.sys.id} turkeys={turkeys} />
//       ))}
//     </div>
//   );
// }

// export  function UnitedKingdom({ unitedkingdom }) {
//   return (
//     <div className="recipe-list">
//       {unitedkingdom.map((unitedkingdoms) => (
//         <UnitedKingdomCard
//           key={unitedkingdoms.sys.id}
//           unitedkingdoms={unitedkingdoms}
//         />
//       ))}
//     </div>
//   );
// }
