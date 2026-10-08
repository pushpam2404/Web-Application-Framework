# Question 6: Route-Specific Middleware

## Problem Statement
Create an ExpressJS application with authentication middleware. The middleware should check whether the request contains a query parameter:
`?role=admin`
If the role is admin, allow access to `/dashboard`. Otherwise, return:
`Access Denied`
Also create a `/home` route that is accessible without authentication.

## How to Run

```bash
node Question-06/server.js
# Or:
npm run q6
```

Runs on port 5003.

## Endpoints
- `GET http://localhost:5003/home` → Accessible to everyone
- `GET http://localhost:5003/dashboard` → Access Denied (HTTP 403)
- `GET http://localhost:5003/dashboard?role=admin` → Allowed (HTTP 200)
