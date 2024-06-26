import React from "react";
import { useSelector } from "react-redux";
import { MdQuiz, MdFavorite } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";

const ProgressOverview = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="border-2 border-[#ddd] bg-white rounded-lg px-4 pt-2 pb-4 mb-8">
      <p className="text-xl font-semibold mb-5">Progress Overview</p>
      <ul className="flex flex-col gap-4">
        <li className="flex gap-2 items-center text-lg font-medium">
          <MdQuiz className="text-3xl" />
          <span>Total Quizzes: {user.totalQuizzes}</span>
        </li>
        <li className="flex gap-3 items-center text-lg font-medium">
          <FaChartLine className="text-2xl ml-1" />
          <span>Average Score: {user.avgScore}</span>
        </li>
        <li className="flex gap-2 items-center text-lg font-medium">
          <MdFavorite className="text-3xl" />
          <span>Favorite Subject: {user.favSubject}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProgressOverview;
