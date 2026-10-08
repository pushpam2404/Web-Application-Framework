# Question 3: Create a Basic ExpressJS Server

## Problem Statement
Create an ExpressJS application that:
- Runs on port 5000.
- Displays "Welcome to ExpressJS" for the `/` route.
- Displays "NodeJS Laboratory" for the `/about` route.
- Returns an appropriate message for an invalid route.

## How to Run

```bash
node Question-03/server.js
# Or:
npm run q3
```

## Endpoints
- `GET http://localhost:5000/` → Returns "Welcome to ExpressJS"
- `GET http://localhost:5000/about` → Returns "NodeJS Laboratory"
- `GET http://localhost:5000/invalid` → Returns 404 message

*(Note: If port 5000 is occupied by macOS AirPlay, server automatically falls back to port 5050).*
