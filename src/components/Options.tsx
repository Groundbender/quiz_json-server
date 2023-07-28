import { Questions, Action } from "../App";
import { Dispatch } from "react";

interface OptionProps {
  question: Questions;
  dispatch: Dispatch<Action>;
  answer: number | null;
}
const Options = ({ question, dispatch, answer }: OptionProps) => {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          key={option}
          disabled={answer !== null}
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
