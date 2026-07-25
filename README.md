# Book Management REST API

A simple REST API built with Node.js and Express that performs CRUD operations on books using in-memory storage.

## Installation

```bash
npm install
```

## Run the API

```bash
node server.js
```

Server runs on:

```text
http://localhost:3000
```

## Endpoints

### Get all books

GET /books

### Get one book

GET /books/:id

### Create a book

POST /books

Example:

```json
{
  "title": "Half of a Yellow Sun",
  "author": "Chimamanda Ngozi Adichie",
  "publishedYear": 2003
}
```

### Update a book

PUT /books/:id

Example:

```json
{
  "title": "Half of a Yellow Sun Updated"
}
```

### Delete a book

DELETE /books/:id
