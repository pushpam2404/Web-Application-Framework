# Question 1: Basic NodeJS HTTP Server

## Problem Statement
Write a NodeJS program using the built-in `http` module to create a server that:
- Runs on port 3000.
- Displays "Welcome to NodeJS Lab" in the browser.
- Returns the current date and time when the user visits `/time`.
- Returns "404 Page Not Found" for any other URL.

## How to Run

```bash
# From Assignment-5 directory:
node Question-01/server.js
# Or using npm script:
npm run q1
```

## Endpoints
- `GET http://localhost:3000/` → Returns "Welcome to NodeJS Lab"
- `GET http://localhost:3000/time` → Returns current date and time
- `GET http://localhost:3000/anything-else` → Returns 404 Page Not Found

## Test Commands
```bash
curl http://localhost:3000/
curl http://localhost:3000/time
curl http://localhost:3000/invalid
```
