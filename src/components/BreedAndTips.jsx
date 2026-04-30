"use client";
import { Card } from "@heroui/react";
import Image from "next/image";

const tips = [
  {
    id: 1,
    title: "Healthy Animal",
    desc: "Choose active and disease-free animals.",
  },
  { id: 2, title: "Check Age", desc: "Ensure proper age by checking teeth." },
  {
    id: 3,
    title: "Proper Feeding",
    desc: "Feed natural খাবার and clean water.",
  },
  {
    id: 4,
    title: "No Physical Defects",
    desc: "Avoid animals with injuries or defects.",
  },
  {
    id: 5,
    title: "Proper Rest & Care",
    desc: "Ensure the animal is stress-free.",
  },
  {
    id: 6,
    title: "Clean Environment",
    desc: "Keep in hygienic place before sacrifice.",
  },
];

const breeds = [
  {
    id: 1,
    name: "Deshi Cow",
    img: "https://i.ibb.co.com/Css9hHj2/Gemini-Generated-Image-dxiuvbdxiuvbdxiu.png",
  },
  {
    id: 2,
    name: "Sahiwal",
    img: "https://i.ibb.co.com/5W1Yd7Z1/Gemini-Generated-Image-gondt5gondt5gond.png",
  },
  {
    id: 3,
    name: "Boer Goat",
    img: "https://i.ibb.co.com/gF6xLSDH/Gemini-Generated-Image-uo6zpvuo6zpvuo6z.png",
  },
  {
    id: 4,
    name: "Black Bengal Goat",
    img: "https://i.ibb.co.com/PG6WHBfr/Gemini-Generated-Image-an4yiwan4yiwan4y.png",
  },
  {
    id: 5,
    name: "Brahman Cow",
    img: "https://i.ibb.co.com/spw3JphR/Gemini-Generated-Image-za8u0hza8u0hza8u.png",
  },
  {
    id: 6,
    name: "Jamunapari Goat",
    img: "https://i.ibb.co.com/kgDvv9q7/Gemini-Generated-Image-qoc541qoc541qoc5.png",
  },
];

const BreedAndTips = () => {
  return (
    <div className="container mx-auto mt-20 px-4 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary animate__animated animate__fadeInUp animate__delay-1s">
          🐄 Qurbani Guide
        </h2>
        <p className="text-gray-500 mt-2 animate__animated animate__fadeInUp animate__delay-1s">
          Best breeds & important tips for Qurbani
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 ">
        <div className="animate__animated animate__fadeInLeft">
          <h3 className="text-2xl font-semibold mb-6 text-secondary">
            Qurbani Tips
          </h3>

          <div className="grid sm:grid-cols-2 gap-5">
            {tips.map((tip) => (
              <Card
                key={tip.id}
                className="p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-base-100 border border-gray-100"
              >
                <Card.Header>
                  <Card.Title className="text-lg font-bold text-tertiary">
                    {tip.title}
                  </Card.Title>
                  <Card.Description className="text-gray-600 mt-1">
                    {tip.desc}
                  </Card.Description>
                </Card.Header>
              </Card>
            ))}
          </div>
        </div>

        <div className="animate__animated animate__fadeInRight">
          <h3 className="text-2xl font-semibold mb-6 text-secondary">
            Popular Breeds
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {breeds.map((breed) => (
              <Card
                key={breed.id}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-base-100"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={breed.img}
                    fill
                    alt={breed.name}
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-3 text-center">
                  <Card.Title className="text-sm font-semibold group-hover:text-primary transition">
                    {breed.name}
                  </Card.Title>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedAndTips;
