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
    console.log(movie1);
})()
```

# Methods
- .getMovies() - Returns all movies
- .getMovie(id, options?, filters?) - Returns a single movie
- .getBooks() - Returns all books
- .getBook(id, options?, filters?) - Returns a single book
- .getChaptersByBook(id, options?, filters?) - Returns all chapters for a book
- .getChapters() - Returns all chapters
- .getChapter(id, options?, filters?) - Returns a single chapter
- .getCharacters() - Returns all characters
- .getCharacter(id, options?, filters?) - Returns a single character
- .getCharacterQuotes(id, options?, filters?) - Returns all quotes for a character
- .getQuotes() - Returns all quotes
- .getQuote(id, options?, filters?) - Returns a single quote