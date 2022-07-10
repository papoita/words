import { useState } from "react";

const useWords = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");// every time they hit a new key with handlekeyup
  const [guesses, setGuesses] = useState([]); //each guess is an array -formatGuess includes color
  const [history, setHistory] = useState([]); // each guess is a string, no duplicate guesses
  const [isCorrect, setIsCorrect] = useState(false); //only true when user wins the game

  //format a new guess into an array of letter objects
  //eg. [{key: "a", color: "green"}]
  const formatGuess = () => {};

  //add a new guess to guesss state
  //update the isCorrect state if the guess is correct
  // add one to the turn state, keep track of turn
  const addNewGuess = () => {};

  //handle keyup event & track current guess
  //if user presses enter, add submits the new guess
  const handleKeyup = () => {};

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWords;
