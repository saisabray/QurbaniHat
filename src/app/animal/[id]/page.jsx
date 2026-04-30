import BookingForm from "@/components/BookingForm";
import animalDataFetch from "@/lib/api";
import Image from "next/image";

const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const animals = await animalDataFetch();
  const animal = animals.find((animal) => animal.id === parseInt(id));
 

  return (
    <div className="max-w-5xl mx-auto p-5">
      {/* Animal Details */}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-full lg:w-1/2">
          <Image
            src={animal.image}
            alt={animal.name}
            className="w-full h-64 object-cover rounded-lg"
            width={400}
            height={300}
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-blue-400 text-2xl">{animal.name}</h2>

          <div className="space-y-1 text-sm">
            <p>
              <b>Type:</b> {animal.type}
            </p>
            <p>
              <b>Breed:</b> {animal.breed}
            </p>
            <p>
              <b>Price:</b> ৳{animal.price}
            </p>
            <p>
              <b>Weight:</b> {animal.weight} kg
            </p>
            <p>
              <b>Age:</b> {animal.age} years
            </p>
            <p>
              <b>Location:</b> {animal.location}
            </p>
            <p>
              <b>Category:</b> {animal.category}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-base">Description:</h3>
            <p className="mt-2 text-gray-600">{animal.description}</p>
          </div>
        </div>
      </div>
      <div className="mt-10 p-5 bg-base-100 rounded-lg shadow-xl">
        <h2 className="card-title my-5 text-blue-400 text-2xl">Book This Animal</h2>
        <div
          className="max-w-md mx-auto my-5
        "
        >
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;
