@[papoita](https://github.com/papoita) | version 1.0.0

This project was completed for educational purposes by [Paola Perez Leiva](https://www.linkedin.com/in/perezleivapaola/) following online resources  such as [Wordle examples ](https://reactjsexample.com/tag/wordle/) and [TheNetNinja](https://www.youtube.com/c/TheNetNinja).

# Words - Food version

A yummier version of [Wordle](https://www.nytimes.com/games/wordle/index.html) clone App.

💡 The front end of this project is built with React and makes requests to our own API to fetch a word.

💡 CSS animation using keyframes provide a better experience to the user when a letter is input.

💡 JSON server was used to create a fake REST-API. The solution word is fetched randomly from the corresponding resource.

🍇 The words you need to guess are always some type of food.

✨ Instead of using red and green as the original version of wordle. This project uses blue and orange in order to be a colorblind-friendly palette. But blue with red and blue with brown could also have been used. This [Color-blind friendly palette](https://www.tableau.com/about/blog/examining-data-viz-rules-dont-use-red-green-together#:~:text=For%20example%2C%20blue/orange%20is%20a%20common%20colorblind%2Dfriendly%20palette.%20Blue/red%20or%20blue/brown%20would%20also%20work.%20For%20the%20most%20common%20conditions%20of%20CVD%2C%20all%20of%20these%20work%20well%2C%20since%20blue%20would%20generally%20look%20blue%20to%20someone%20with%20CVD) is a good resource if you want to read more about it.

In this words project

* 🔵 Blue = correct letter and position, replacing green

* 🟠 Orange = correct letter, not position replacing yellow

* ⚪ Grey = not in game word

## You Win 
!["Winning Food Words"](/docs/winGame.gif)

## End of Game
!["Loosing Food Words"](/docs/endOfGame.gif)

# To Setup
1. install dependencies with 

    `npm install`

2. Run the client frontend repo 

    `npm run start`

3. Run the database (own JSON file endpoints/resource)

    `npx json-server ./data/db.json --port 3001`

## Dependencies

* JSON server
* React
* Jest

## Testing

* install jest
`npm install --save-dev jest`

* run jest
`npm jest`


