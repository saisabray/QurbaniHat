import { CircleFill } from "@gravity-ui/icons";
import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const AnimalCard = ({ animal }) => {
  return (
    <div className="card bg-slate-50 rounded-xl hover:border-primary transition-all overflow-hidden shadow-xl max-w-md mx-auto relative">
      <Chip
        color="warning"
        variant="primary"
        className="absolute top-5 right-5 z-1 py-1 px-3 
font-bold"
      >
        <Chip.Label>
          <span className="text-lg">&#2547;</span>
          {animal.price}
        </Chip.Label>
      </Chip>
     
      <Link href="/">
        <figure className="h-48 overflow-hidden">
          <div className="relative w-full h-full aspect-square">
            <Image
              src={animal?.image}
              alt={animal?.name}
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </figure>
      </Link>

      <div className="p-6">
        <Link href={`/animal/${animal.id}`}>
          <h3 className="text-xl text-gray-800 font-semibold mb-3 hover:text-primary transition-colors">
            {animal.name}
          </h3>
        </Link>

        <p className="text-gray-500 text-sm mb-4">{animal.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="text-xs px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
            {animal.type}
          </span>

          <span className="text-xs px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
            {animal.breed}
          </span>

          <span className="text-xs px-3 py-1 bg-sky-100 text-sky-700 rounded-full font-medium">
            {animal.location}
          </span>

          <span className="text-xs px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-medium">
            {animal.category}
          </span>
        </div>

        <Link
          href={`/animal/${animal.id}`}
        >
          <button className="btn btn-primary w-full rounded-2xl"> See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default AnimalCard;
// age: 3;
// breed: "Local Deshi";
// category: "Large Animal";
// description: "Healthy deshi cow suitable for Qurbani. Well fed with natural food.";
// id: 1;
// image: "https://i.ibb.co.com/j9dTBNgw/Gemini-Generated-Image-anx40kanx40kanx4.png";
// location: "Bogura";
// name: "Deshi Shahi Cow";
// price: 120000;
// type: "Cow";
// weight: 280;
