const express = require("express");

const app = express();
app.use(express.json());

let books = [
  {
    id: 1,
    title: "Purple Hibiscus",
    author: "Chimamanda Ngozi Adichie",
  },
];

let nextId = 2;

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const book = books.find(
    (b) => b.id === Number(req.params.id)
  );

  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  res.json(book);
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({
      message: "Title and author are required",
    });
  }

  const newBook = {
    id: nextId++,
    title,
    author,
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

app.put("/books/:id", (req, res) => {
  const book = books.find(
    (b) => b.id === Number(req.params.id)
  );

  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  const { title, author } = req.body;

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

app.delete("/books/:id", (req, res) => {
  const index = books.findIndex(
    (b) => b.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  books.splice(index, 1);

  res.json({
    message: "Book deleted successfully",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});