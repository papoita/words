import React, { useEffect } from "react";
import useWords from "../hooks/useWords";
import Grid from "./Grid";
import Keypad from "./Keypad";

export default function Words({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWords(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect]);

  return (
    <>
      {/* <div>solution - {solution} </div>
      <div>currentGuess - {currentGuess}</div> */}
      <Grid currentGuess={currentGuess} guesses = {guesses} turn = {turn}/>
      <Keypad usedKeys = {usedKeys}/>
    </>
  );
}
