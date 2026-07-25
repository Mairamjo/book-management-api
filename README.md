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
  "title": "Atomic Habits",
  "author": "James Clear"
}
```

### Update a Book

```http
PUT /books/:id
```

Sample Request:

```json
{
  "title": "Atomic Habits Updated"
}
```

### Delete a Book

```http
DELETE /books/:id