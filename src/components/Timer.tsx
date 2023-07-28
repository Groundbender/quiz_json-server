import { Dispatch, useEffect } from "react";
import { Action } from "../App";

interface TimerProps {
  dispatch: Dispatch<Action>;
  secondsRemaining: number | null;
}

const Timer = ({ dispatch, secondsRemaining }: TimerProps) => {
  const mins = secondsRemaining && Math.floor(secondsRemaining / 60);

  const seconds = secondsRemaining && secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins && mins > 10 ? `${mins}` : `0${mins}`} :{" "}
      {seconds && seconds > 10 ? `${seconds}` : `0${seconds}`}
    </div>
  );
};

export default Timer;
