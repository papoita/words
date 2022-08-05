# Words - Food version

A yummier version of [Wordle](https://www.nytimes.com/games/wordle/index.html) clone App created using REACT, javascript and CSS.

The words you need to guess are different types of food! Have fun!

Instead of using red and green as the original version of wordle. This project uses blue and orange in order to be a colorblind-friendly palette. But blue with red and blue with brown could also have been used. 

In this words project
* Blue = correct letter and position, replacing green

* Orange = correct letter, not position

* Grey = not in game word

[Color-blind friendly palette](https://www.tableau.com/about/blog/examining-data-viz-rules-dont-use-red-green-together#:~:text=For%20example%2C%20blue/orange%20is%20a%20common%20colorblind%2Dfriendly%20palette.%20Blue/red%20or%20blue/brown%20would%20also%20work.%20For%20the%20most%20common%20conditions%20of%20CVD%2C%20all%20of%20these%20work%20well%2C%20since%20blue%20would%20generally%20look%20blue%20to%20someone%20with%20CVD)

# To run 
* frontend
`npm run start`
* db
`npx json-server ./data/db.json --port 3001`

# Testing

* Testing using jest
`npm install --save-dev jest`



