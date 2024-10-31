import React from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { BaseCardData } from "../app/choose/page";

type CardProps = BaseCardData & {
  cards: BaseCardData[];
  setCards: React.Dispatch<React.SetStateAction<BaseCardData[]>>;
};

const Card = ({ id, full_name, img, city, cards, setCards }: CardProps) => {
  const x = useMotionValue(0);

  const handleDragEnd = (event: any, info: any) => {
    const dragDirection = info.offset.x > 0 ? "right" : "left";
    const dragDistance = Math.abs(info.offset.x);

    if (dragDistance > 50) {
      setCards((prevCards: BaseCardData[]) =>
        prevCards.filter((card: BaseCardData) => card.id !== id)
      );

      if (dragDirection === "right") {
        console.log(
          "RIGHT:",
          JSON.stringify({ id, full_name, img, city }, null, 2)
        );
      } else {
        console.log(
          "LEFT:",
          JSON.stringify({ id, full_name, img, city }, null, 2)
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
    const offset = isFront ? 0 : id % 2 ? 3 : -3;
    return `${rotateRaw.get() + offset}deg`;
  });

  return (
    <div className="flex justify-center items-center">
      <motion.div
        drag="x"
        className="w-[30%] h-[60%] bg-white origin-bottom hover:cursor-grab active:cursor-grabbing rounded-xl p-5 flex flex-col gap-1 border border-black absolute"
        style={{
          x,
          opacity,
          // color,
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
        <img
          src={img}
          alt={full_name}
          className="w-full h-36 object-cover rounded-lg"
        />
        <h1 className="font-bold">{full_name}</h1>
        <p>{city}</p>
      </motion.div>
    </div>
  );
};

export default Card;
