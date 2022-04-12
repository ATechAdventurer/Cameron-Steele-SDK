import LOTR from "../dist/index.js";

const lotr = new LOTR({ apiKey: "ivh7EBvFKH2UVzaPj-s6" });

(async () => {
  const books = await lotr.getBooks();
  const quotes = await lotr.getChaptersByBook(books[0]._id);
  console.log(quotes);
})();
