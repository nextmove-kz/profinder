"use client";
import React from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { BaseCardData } from "../app/choose/page";

type CardProps = BaseCardData & {
  cards: BaseCardData[];
  setCards: React.Dispatch<React.SetStateAction<BaseCardData[]>>;
};

const Card = ({
  id,
  fullName,
  skills,
  salary,
  city,
  educationLevels,
  education,
  employmentType,
  email,
  phoneNumber,
  about,
  experience,
  cards,
  setCards,
}: CardProps) => {
  const x = useMotionValue(0);

  const handleDragEnd = (event: any, info: any) => {
    const dragDirection = info.offset.x > 0 ? "right" : "left";
    const dragDistance = Math.abs(info.offset.x);

    if (dragDistance > 50) {
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));

      const cardChoice = { id, fullName, city, direction: dragDirection };
      const choices = JSON.parse(localStorage.getItem("cardChoose") || "[]");
      choices.push(cardChoice);
      localStorage.setItem("cardChoose", JSON.stringify(choices));

      if (dragDirection === "right") {
        console.log("LIKE:", JSON.stringify({ id, fullName, city }, null, 2));
      } else {
        console.log(
          "DISLIKE:",
          JSON.stringify({ id, fullName, city }, null, 2)
        );
      }
    }
  };

  const opacity = useTransform(x, [-400, 0, 400], [0, 1, 0]);
  const color = useTransform(
    x,
    [-300, 0, 300],
    ["#FF0000", "#FFFFFF", "#00FF00"]
  );

  const rotateRaw = useTransform(x, [-300, 300], [-18, 18]);
  const isFront = id === cards[cards.length - 1]?.id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : Number(id) % 2 ? 3 : -3;
    return `${rotateRaw.get() + offset}deg`;
  });

  return (
    <div className="w-full flex justify-center items-center">
      <motion.div
        drag="x"
        className="w-[30%] h-[40%] bg-white origin-bottom hover:cursor-grab active:cursor-grabbing rounded-xl p-5 flex flex-col gap-2 border border-black absolute top-1/4"
        style={{
          gridRow: 1,
          gridColumn: 1,
          x,
          opacity,
          rotate,
          background: color,
          transition: "0.125s transform",
          boxShadow: isFront
            ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
            : undefined,
        }}
        animate={{ scale: isFront ? 1 : 0.98 }}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
      >
        <div className="flex items-center justify-center gap-3">
          <h1 className="font-bold text-2xl">{fullName}</h1>
          <p className="text-slate-500">{city}</p>
        </div>
        <p
          className="text-lg font-bold"
          dangerouslySetInnerHTML={{ __html: about }}
        />
        <p className="text-sm">
          Phone: <span className="text-sm text-slate-500">{phoneNumber}</span>
        </p>
        <p className="text-gray-800 text-sm">Навыки: {skills}</p>
        <p className="text-sm text-gray-800">Зарплата: {salary}</p>
        <p className="text-sm flex gap-1">
          Опыт работы:
          <p
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: experience }}
          />
        </p>
      </motion.div>
    </div>
  );
};

export default Card;
