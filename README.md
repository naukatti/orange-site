# Orange site

This app displays the 20 top stories from Hacker News. You can also click on the creator of that post to see additonal user information.

App is deployed at <https://orange-site.herokuapp.com/>

## Usage

`npm install`

This downloads all of the necessary dependencies

`npm start`

This runs the app in development mode (this command should automaticly open your browser and a new tab in it with the url: http://localhost:3000 )

## Thoughts

- I chose [create-react-app](https://github.com/facebook/create-react-app) because it has everything ready for development, setting everything by hand from webpack to babel would create a significant amount of work for me.

- I decided to use axios, because that is the one I'm familiar with.

- I decided to try using [reset.css](https://meyerweb.com/eric/tools/css/reset/), as I heard about it and simply wanted to try as it sounded quite handy.

## Things to improve

- Add a way to sort the posts by score

- Add a filtering system of sorts, by score or creator etc.
