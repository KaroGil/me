"use client";
import CardView from "./layouts/cardView";
import PageView from "./layouts/pageView";
import { useState } from "react";

export default function Home() {
  const [cardView, setCardView] = useState(true);

  const style = cardView
    ? "bg-gradient-to-br from-blue-500 to-green-500 hover:via-white-200 to-85%"
    : "bg-green-500";
  return (
    <div className={style}>
      <button
        className="border text-gray-400 border-gray-400 px-3 py-2 m-1 rounded hover:text-violet-700 hover:border-violet-700 focus:outline-none transition"
        onClick={() => setCardView(!cardView)}
      >
        {cardView ? "Page View" : "Card View"}
      </button>
      {cardView ? <CardView /> : <PageView />}
    </div>
  );
}
