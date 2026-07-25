# Book Management REST API

A simple REST API built with Node.js and Express for managing books using in-memory storage (no database).

## Language and Framework

- JavaScript
- Node.js
- Express.js

## Installation

```bash
npm install
```

## Run the Application

```bash
node server.js
```

Server runs at:

```text
http://localhost:3000
```

## Book Structure

```json
{
  "id": 1,
  "title": "Purple Hibiscus",
  "author": "Chimamanda Ngozi Adichie",
  "publishedYear": 2003
}
```

## Endpoints

### Get All Books

```http
GET /books
```

### Get One Book

```http
GET /books/:id
```

### Create a Book

```http
POST /books
```

Sample Request:

```json
{
  "title": "Half of a Yellow Sun",
  "author": "Chimamanda Ngozi Adichie",
  "publishedYear": 2006
}
```

Sample Response:

```json
{
  "id": 2,
  "title": "Half of a Yellow Sun",
  "author": "Chimamanda Ngozi Adichie",
  "publishedYear": 2006
}
```

### Update a Book

```http
PUT /books/:id
```

Sample Request:

```json
{
  "title": "Half of a Yellow Sun Updated",
  "publishedYear": 2007
}
```

### Delete a Book

```http
DELETE /books/:id
```

Sample Response:

```json
{
  "message": "Book deleted successfully"
}
```

## Bonus Endpoints

### Count Books

```http
GET /books/count
```

Sample Response:

```json
{
  "count": 2
}
```

### Search Books by Title

```http
GET /books?title=yellow
```

## Features

- In-memory data storage
- CRUD operations
- Search books by title
- Count books
- Proper HTTP status codes
- Error handling
- JSON responses