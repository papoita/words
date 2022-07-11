import { useState } from "react";

const useWords = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState(""); // every time they hit a new key with handlekeyup
  const [guesses, setGuesses] = useState([]); //each guess is an array -formatGuess includes color
  const [history, setHistory] = useState(["hello", "ninja"]); // each guess is a string, no duplicate guesses
  const [isCorrect, setIsCorrect] = useState(false); //only true when user wins the game

  //format a new guess into an array of letter objects
  //eg. [{key: "a", color: "green"}]
  const formatGuess = () => {
    console.log("formatting the guess:", currentGuess)
  };

  //add a new guess to guesss state
  //update the isCorrect state if the guess is correct
  // add one to the turn state, keep track of turn
  const addNewGuess = () => {};

  //handle keyup event & track current guess
  //if user presses enter, add submits the new guess
  const handleKeyup = ({ key }) => {
    // console.log(key) would record any key including delete and shift, so you want to have only letters a-z using regular expressions
    if (key === "Enter") {
      //only add if turn is less than 5
      if (turn > 5) {
        console.log("You used all your turns");
        return;
      }
      //do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log("You already tried this word");
        return;
      }
      //if words is  5 characters long
      if (currentGuess.length !== 5) {
        console.log("Word has to be 5 characters long");
        return;
      }
      formatGuess();
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWords;
