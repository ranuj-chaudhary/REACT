import { useEffect } from "react";
import { useQuiz } from "../context/QuizProvider";

const Timer = () => {
  const { seconds, dispatch } = useQuiz();
  const minutes = Math.floor(seconds / 60);
  const second = seconds % 60;

  useEffect(
    function () {
      let id = setInterval(() => {
        dispatch({ type: "TIMER", payload: 1 });
      }, 1000);

      return function () {
        clearInterval(id);
      };
    },
    [dispatch]
  );

  return (
    <p className="timer">
      {minutes < 10 ? "0" : ""}
      {minutes} : {second < 10 ? "0" : ""}
      {second}{" "}
    </p>
  );
};
export default Timer;
