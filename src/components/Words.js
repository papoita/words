import React, { useEffect, useState } from "react";
import useWords from "../hooks/useWords";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

export default function Words({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWords(solution);
  const [showModal, setShowModal]= useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if(isCorrect){
      console.log("CONGRATS! you win")
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    if(turn > 5){
      console.log("Sorry, you are out of guesses")
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  // useEffect(() => {
  //   console.log(guesses, turn, isCorrect)
  // }, [guesses, turn, isCorrect]);

  return (
    <>
      {/* <div>solution - {solution} </div>
      <div>currentGuess - {currentGuess}</div> */}
      <Grid currentGuess={currentGuess} guesses = {guesses} turn = {turn}/>
      <Keypad usedKeys = {usedKeys}/>
      {showModal && <Modal isCorrect = {isCorrect} turn={turn} solution={solution}/> }
    </>
  );
}
