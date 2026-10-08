# Question 7: REST API for Student Management

## Problem Statement
Develop a RESTful API using ExpressJS for managing students:
- `GET /students` → Return all students.
- `GET /students/:id` → Return a student by ID.
- `POST /students` → Add a new student.
- Store student information temporarily using an in-memory array.
- Use JSON format for all responses.

## How to Run

```bash
node Question-07/server.js
# Or:
npm run q7
```

Runs on port 5004.

## Sample Requests
```bash
# Get all students
curl http://localhost:5004/students

# Get student by ID
curl http://localhost:5004/students/1

# Add new student
curl -X POST http://localhost:5004/students \
  -H "Content-Type: application/json" \
  -d '{"name": "Maya Rao", "rollNumber": "2024107721", "branch": "CSE-Core", "semester": "6th Semester"}'
```
