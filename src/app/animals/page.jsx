import AnimalCard from "@/components/Animals/AnimalCard";
import animalDataFetch from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

const AnimalsPage = async () => {
  const animalData = await animalDataFetch();
  return (
    <div className="container mx-auto mt-10 sm:mt-20 ">
      <h2 className="text-3xl font-bold mb-10 ">Featured animals </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 animate__animated animate__fadeInUp">
        {animalData.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalsPage;
