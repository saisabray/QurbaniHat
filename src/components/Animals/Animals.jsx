import animalDataFetch from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import AnimalCard from "./AnimalCard";

const Animals = async () => {
  const animalData = await animalDataFetch();
  return (
    <div className="container mx-auto mt-20">
      <h2 className="text-3xl font-bold mb-10 ">Featured animals </h2>
      <div className="grid grid-cols-4 gap-10">
        {animalData.slice(0, 4).map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default Animals;


