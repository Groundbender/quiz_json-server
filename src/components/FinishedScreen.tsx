import React, { Dispatch } from "react";
import { Action } from "../App";

interface FinishedScreenProps {
  points: number;
  maxPossiblePoints: number;
  highScore: number;
  dispatch: Dispatch<Action>;
}

const FinishedScreen = ({
  points,
  maxPossiblePoints,
  highScore,
  dispatch,
}: FinishedScreenProps) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage === 1) emoji = "🏆";
  if (percentage >= 80 && percentage < 100) emoji = "🥇";
  if (percentage >= 50 && percentage < 80) emoji = "🥈";
  if (percentage > 0 && percentage < 50) emoji = "🥉";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
};

export default FinishedScreen;
