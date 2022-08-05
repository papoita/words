import React from "react";

export default function Modal ({isCorrect, turn, solution}) {
return (
  <div className="modal">
    {isCorrect && (
      <div>
        <h1>
          CONGRATS! 
        </h1>
        <p className="solution"> The solution was: {solution}</p>
        <p>You found the solution in {turn} guesses =)</p>
      </div>
    )}

{!isCorrect && (
      <div>
        <h2>
          Sorry: try again
        </h2>
        <p className="solution"> The solution was: {solution}</p>
        <p>You'll do better next time</p>
      </div>
    )}

  </div>
)
}