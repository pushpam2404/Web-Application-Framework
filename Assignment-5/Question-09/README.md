# Question 9: ExpressJS API with Multiple Routes and Middleware

## Problem Statement
Develop a simple Employee Management REST API using ExpressJS:
- Use middleware to log every request.
- Implement `GET /employees`.
- Implement `GET /employees/:id`.
- Implement `POST /employees`.
- Return 404 when an employee ID does not exist.
- Return responses in JSON format.

## How to Run

```bash
node Question-09/server.js
# Or:
npm run q9
```

Runs on port 5006.

## Sample Requests
```bash
# Get all employees
curl http://localhost:5006/employees

# Get employee by existing ID
curl http://localhost:5006/employees/1

# Get employee with non-existent ID (Returns 404)
curl http://localhost:5006/employees/999

# Add new employee
curl -X POST http://localhost:5006/employees \
  -H "Content-Type: application/json" \
  -d '{"name": "Elena Rostova", "department": "Security", "role": "Security Engineer", "salary": 88000}'
```
