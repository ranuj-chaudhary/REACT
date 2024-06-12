import React from "react";

const StarterScreen = ({dispatch}) => {
  return (
    <div className="start">
      <h2>We are ready to start the quiz</h2>
      <h3>Quiz to check you React Skills.</h3>
      <button type="button" className="btn btn-ui" onClick={() => dispatch({type: "ACTIVE"})}>Start Quiz</button>
    </div>
  );
};

export default StarterScreen;
