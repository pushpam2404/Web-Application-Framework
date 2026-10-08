# Question 17: Student Management System REST API (NodeJS / ExpressJS)

## Problem Statement
Develop a NodeJS and ExpressJS REST API for a Student Management System:
- Implement GET, POST, PUT, and DELETE operations for student records.
- Use appropriate routes and JSON middleware.

## How to Run

```bash
node Question-17/server.js
# Or:
npm run q17
```

Runs on port 5009.

## Sample Requests
```bash
# Get all students
curl http://localhost:5009/students

# Get student by ID
curl http://localhost:5009/students/1

# Add student
curl -X POST http://localhost:5009/students \
  -H "Content-Type: application/json" \
  -d '{"name": "Aditya Verma", "rollNumber": "2024107725", "branch": "CSE-AI", "semester": "6th Semester", "cgpa": 9.1}'

# Update student
curl -X PUT http://localhost:5009/students/1 \
  -H "Content-Type: application/json" \
  -d '{"cgpa": 9.6}'

# Delete student
curl -X DELETE http://localhost:5009/students/2
```
