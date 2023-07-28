import { Dispatch } from "react";
import { Action } from "../App";

interface NextButtonProps {
  dispatch: Dispatch<Action>;
  answer: number | null;
  index: number;
  questionsLength: number;
}

const NextButton = ({
  dispatch,
  answer,
  index,
  questionsLength,
}: NextButtonProps) => {
  if (answer === null) return null;

  if (index < questionsLength - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
      Finish
    </button>
  );
};

export default NextButton;
