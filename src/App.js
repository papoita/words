import { useEffect, useState } from "react";

export default function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        
        //random integer between 0-14
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution.word)
      });
  }, [setSolution]);

  return (
    <div className="App">
      <h1> Food Words </h1>
      {solution && <div> Solution is: {solution} </div>}
    </div>
  );
}

/*
SOLUTION
5 letter string db, eg. "drain"

PAST GUESSES 
-(array of letter obsjs)
[{},{},{},{}, {}]
- each object represents a letter in the guess word 
{key: "a", color: "yellow"}

CURRENT GUESS
-string "hello"

KEYPAD LETTERS
array of letter objects [{key: "a", color: "green"}, {}, {}, {}, {}]

NUMBER OF TURNS
integer between 0-6

GAME PROCESS

ENETRINGWORDS IN THE GRID
- user enters a letter and a square fills that letter
- when a user hits enter it submits the word
-if all squares are not filled with letter then the word is not submitted
- if that word has already been used in a prev guess then the word is not submitted

CHECKING SUBMITTED WORDS (each turn)
-each letter is checked to see if it matches the solution
-each letter is assigned a color based if it is part of the solution
  --exact matches (green)correct position
  --partial matches (yellow) not in correct position
  --no matches (not in the solution at all) (grey)
  - the guess is added to th egrid with the correct colors
  - the keypad letters are updated (colors)

  ENDING GAME
  -when the guessed word fully matches the solution ("well done")

  runs out of guesses
  ("oops! try again")

  - 
  JSON file, 3rd party api, own database served in mongodb

  // localhost:3000/solutions
// using json server wraps api endpoints
*/
