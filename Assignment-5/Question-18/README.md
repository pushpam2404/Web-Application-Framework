# Question 18: Online Event Management System REST API (ExpressJS)

## Problem Statement
Develop an ExpressJS REST API for an Online Event Management System:
- Routes to:
  - Add an event (`POST /events`)
  - Retrieve all events (`GET /events`)
  - Retrieve an event by ID (`GET /events/:id`)
  - Update event details (`PUT /events/:id`)
  - Delete an event (`DELETE /events/:id`)
- Suitable middleware (JSON body parsing, request logger, payload validator).
- Route parameters (`:id`).

## How to Run

```bash
node Question-18/server.js
# Or:
npm run q18
```

Runs on port 5010.

## Sample Requests
```bash
# Get all events
curl http://localhost:5010/events

# Get event by ID
curl http://localhost:5010/events/1

# Add event
curl -X POST http://localhost:5010/events \
  -H "Content-Type: application/json" \
  -d '{"title": "DevCon 2026", "date": "2026-11-20", "location": "Tech Park Auditorium", "capacity": 300}'

# Update event
curl -X PUT http://localhost:5010/events/1 \
  -H "Content-Type: application/json" \
  -d '{"capacity": 400}'

# Delete event
curl -X DELETE http://localhost:5010/events/2
```
