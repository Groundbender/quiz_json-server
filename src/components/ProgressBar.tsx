import React from "react";

interface ProgressBar {
  index: number;
  questionsLength: number;
  points: number;
  maxPossiblePoints: number;
  answer: number | null;
}

const ProgressBar = ({
  index,
  questionsLength,
  points,
  maxPossiblePoints,
  answer,
}: ProgressBar) => {
  return (
    <header className="progress">
      <progress
        max={questionsLength}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/ {questionsLength}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default ProgressBar;
