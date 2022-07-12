import { useState } from "react";

const useWords = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState(""); // every time they hit a new key with handlekeyup
  const [guesses, setGuesses] = useState([...Array(6)]); //each guess is an array -formatGuess includes color
  const [history, setHistory] = useState([]); // each guess is a string, no duplicate guesses
  const [isCorrect, setIsCorrect] = useState(false); //only true when user wins the game

  //format a new guess into an array of letter objects
  //eg. [{key: "a", color: "green"}]
  const formatGuess = () => {
    console.log("formatting the guess:", currentGuess);

    //spread the string into separate letters
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "grey" };
    });

    //is the letter in the correct poisition assign green
    formattedGuess.forEach((letter, i) => {
      if (solutionArray[i] === letter.key) {
        formattedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });

    // is the letter correct but not in the right position assign yellow
    formattedGuess.forEach((letter, i) => {
      if (solutionArray.includes(letter.key) && letter.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });
    //is the letter not in the game assign grey
    return formattedGuess;
  };

  //add a new guess to guesss state
  //update the isCorrect state if the guess is correct
  // add one to the turn state, keep track of turn
  // add guess to string format
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses]; // 1st time all undefined
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setCurrentGuess(""); //reset current guess with blank slate
  };

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
      //after the formatted function to green, yellow or grey
      const formatted = formatGuess();
      console.log(formatted);
      addNewGuess(formatted);
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
