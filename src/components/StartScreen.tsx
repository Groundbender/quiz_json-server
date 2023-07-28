import { Dispatch } from "react";
import { Action } from "../App";

interface StartScreenProps {
  questionsLength: number;
  dispatch: Dispatch<Action>;
}

const StartScreen: React.FC<StartScreenProps> = ({
  questionsLength,
  dispatch,
}) => {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{questionsLength} question to test your React mastery</h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
