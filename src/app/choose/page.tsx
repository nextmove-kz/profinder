"use client";

import Card from "@/components/Card";
import React, { useState } from "react";

export type BaseCardData = {
  id: number;
  full_name: string;
  img: string;
  city: string;
};

const Page = () => {
  const data: BaseCardData[] = [
    {
      id: 3,
      full_name: "Anuar Kapbasov",
      img: "https://www.ar-cars.cz/cache/images/project/010/10003/1920x1094-exact/default/31/61631-mercedes-benz-cls-63-amg-renntech-500kw-0.jpeg",
      city: "New York",
    },
    {
      id: 2,
      full_name: "Ivan Lukov",
      img: "https://www.ar-cars.cz/cache/images/project/010/10003/1920x1094-exact/default/31/61631-mercedes-benz-cls-63-amg-renntech-500kw-0.jpeg",
      city: "Barcelona",
    },
    {
      id: 1,
      full_name: "David Kozhakhmetov",
      img: "https://www.ar-cars.cz/cache/images/project/010/10003/1920x1094-exact/default/31/61631-mercedes-benz-cls-63-amg-renntech-500kw-0.jpeg",
      city: "Paris",
    },
  ];

  const [cards, setCards] = useState<BaseCardData[]>(data);

  return (
    <div className="min-h-screen grid place-content-center relative">
      {cards.map((item) => (
        <Card key={item.id} {...item} cards={cards} setCards={setCards} />
      ))}
    </div>
  );
};

export default Page;
