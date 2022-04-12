# The One API SDK
A Hybrid SDK wrapper for TheOne API that targets both browser JS and Nodejs written in Typescript.

## Install 
Simply add the library to your project via the [`npm`](https://www.npmjs.com/) package manager.

`npm i --save @atechadventurer/cameron-steele-lotr-sdk`

## Usage (Node)

```javascript
const LOTR = require('@atechadventurer/cameron-steele-lotr-sdk');

(async () => {
    const lotr = new LOTR({ apiKey: '<YOUR_API_KEY>' });
    const movies = await lotr.getMovies({
        limit: 3,
        sort: "_id:asc"
    });
    const movie1 = await lotr.getMovie(movies[0]._id);
    
})()
```