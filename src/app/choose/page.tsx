"use client";

import Card from "@/components/Card";
import React, { useState, useEffect } from "react";
import PocketBase from "pocketbase";

export type BaseCardData = {
  id: string;
  fullName: string;
  skills: string;
  salary: number | string;
  city: string;
  educationLevels: string;
  education: string;
  employmentType: string;
  email: string;
  phoneNumber: string;
  about: string;
  experience: string;
};

const pb = new PocketBase("https://profinder.pockethost.io");

const Page = () => {
  const [cards, setCards] = useState<BaseCardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const resumeData = async () => {
      try {
        const resume = await pb.collection("resume").getFullList({
          sort: "+created",
        });

        const result: BaseCardData[] = resume.map((item) => ({
          id: item.id,
          fullName: item.fullName,
          skills: item.skills,
          salary: item.salary.toString(),
          city: item.city,
          educationLevels: item.educationLevels,
          education: item.education,
          employmentType: item.employmentType,
          email: item.email,
          phoneNumber: item.phoneNumber,
          about: item.about,
          experience: item.experience,
        }));

        const choices = JSON.parse(localStorage.getItem("cardChoose") || "[]");
        const choicesId = choices.map((choice: BaseCardData) => choice.id);

        const finalCards = result.filter(
          (card) => !choicesId.includes(card.id)
        );

        setCards(finalCards);
      } catch (err) {
        console.error("Ошибка:", err);
      } finally {
        setIsLoading(false);
      }
    };
    resumeData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen grid place-content-center">Загрузка...</div>
    );
  }

  return (
    <div className="relative w-screen min-h-screen justify-center items-center">
      <div className="relative justify-center items-center w-full  h-screen">
        {cards.map((item) => (
          <Card key={item.id} {...item} cards={cards} setCards={setCards} />
        ))}
      </div>
    </div>
  );
};

export default Page;
