import React, { useEffect } from "react";
import useWords from "../hooks/useWords";

export default function Words({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWords(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect]);

  return (
    <>
      <div>solution - {solution} </div>
      <div>currentGuess - {currentGuess}</div>
    </>
  );
}
