import AnimalCard from "@/components/Animals/AnimalCard";
import animalDataFetch from "@/lib/api";
import SortFilter from "@/components/Animals/SortFilter";

const AnimalsPage = async ({ searchParams }) => {
  const { sort } = await searchParams;
  let animalData = await animalDataFetch();

  if (sort === "asc") {
    animalData.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    animalData.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container mx-auto mt-10 sm:mt-20 px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h2 className="text-3xl font-bold">Featured animals </h2>
        <div className="w-full md:w-auto">
          <SortFilter />
        </div>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 animate__animated animate__fadeInUp">
        {animalData.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalsPage;
