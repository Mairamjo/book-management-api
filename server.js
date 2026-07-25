const express = require("express");

const app = express();
app.use(express.json());

let books = [
  {
    id: 1,
    title: "Purple Hibiscus",
    author: "Chimamanda Ngozi Adichie",
    publishedYear: 2003,
  },
];

let nextId = 2;

// GET all books or search by title
app.get("/books", (req, res) => {
  const { title } = req.query;

  if (title) {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );

    return res.status(200).json(filteredBooks);
  }

  res.status(200).json(books);
});

// BONUS: Count books
app.get("/books/count", (req, res) => {
  res.status(200).json({
    count: books.length,
  });
});

// GET one book by ID
app.get("/books/:id", (req, res) => {
  const book = books.find(
    (b) => b.id === Number(req.params.id)
  );

  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  res.status(200).json(book);
});

// CREATE a book
app.post("/books", (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author) {
    return res.status(400).json({
      message: "Title and author are required",
    });
  }

  const newBook = {
    id: nextId++,
    title,
    author,
    publishedYear,
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

// UPDATE a book
app.put("/books/:id", (req, res) => {
  const book = books.find(
    (b) => b.id === Number(req.params.id)
  );

  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  const { title, author, publishedYear } = req.body;

  if (title) book.title = title;
  if (author) book.author = author;
  if (publishedYear) book.publishedYear = publishedYear;

  res.status(200).json(book);
});

// DELETE a book
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

  res.status(200).json({
    message: "Book deleted successfully",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});