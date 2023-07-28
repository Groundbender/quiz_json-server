import React from "react";
import { Action, Questions } from "../App";
import { Dispatch } from "react";
import Options from "./Options";

interface QuestionProps {
  question: Questions;
  dispatch: Dispatch<Action>;
  answer: number | null;
}

const Question: React.FC<QuestionProps> = ({ question, answer, dispatch }) => {
  console.log(question);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
