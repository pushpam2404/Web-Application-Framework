# Question 8: REST API with PUT and DELETE

## Problem Statement
Create an ExpressJS REST API for a collection of books with the following operations:
- `GET /books` → Display all books.
- `POST /books` → Add a new book.
- `PUT /books/:id` → Update book details.
- `DELETE /books/:id` → Delete a book.
- Return suitable HTTP status codes and JSON responses.

## How to Run

```bash
node Question-08/server.js
# Or:
npm run q8
```

Runs on port 5005.

## Sample Requests
```bash
# Get all books
curl http://localhost:5005/books

# Add book
curl -X POST http://localhost:5005/books \
  -H "Content-Type: application/json" \
  -d '{"title": "The Pragmatic Programmer", "author": "Andy Hunt", "year": 2019, "price": 42.50}'

# Update book
curl -X PUT http://localhost:5005/books/1 \
  -H "Content-Type: application/json" \
  -d '{"price": 34.99}'

# Delete book
curl -X DELETE http://localhost:5005/books/2
```
