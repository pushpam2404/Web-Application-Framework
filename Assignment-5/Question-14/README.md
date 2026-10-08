# Question 14: Basic Web Server with Separate Routes (NodeJS / ExpressJS)

## Problem Statement
Develop a NodeJS program using ExpressJS to create a basic web server with separate routes for:
- Home (`/`)
- About (`/about`)
- Contact (`/contact`)
- 404 handler for invalid routes.

## How to Run

```bash
node Question-14/server.js
# Or:
npm run q14
```

Runs on port 5008.

## Endpoints
- `GET http://localhost:5008/` → Home Page
- `GET http://localhost:5008/about` → About Page
- `GET http://localhost:5008/contact` → Contact Page
- `GET http://localhost:5008/invalid` → 404 Page
