# Assignment 5: Web Application Framework

**Course:** Web Application Framework  
**Student Name:** Pushpam Raj Satyarthi  
**Roll Number:** 2024107717  
**Department / Branch:** CSE-Core  

---

## 📌 Overview

This repository contains the complete implementation of all **18 programs** for **Assignment 5**, covering:
- **NodeJS & Built-in Modules** (HTTP, FS, custom modules with `require()`)
- **ExpressJS Web Servers, Routing, and Middleware** (Custom logging, auth guards, query parameters)
- **RESTful APIs with full CRUD operations** (Students, Books, Employees, Products, Events)
- **ReactJS Modern Frontend Development** (Reusable components, Props, `useState`, `useEffect`, Context API)
- **Interactive UI Dashboard** (Vite + React) featuring live exploration of all React and Backend programs

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
cd "Assignment-5"
npm install
```

### 2. Launch Interactive React Web Application
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to interactively test all React components and explore backend endpoints!

---

## 📋 Complete Directory & Question Index

| # | Question / Topic | Technology | Folder | Execution Command |
|---|---|---|---|---|
| **1** | Basic NodeJS HTTP Server | Node.js `http` | [`Question-01/`](./Question-01) | `npm run q1` |
| **2** | Custom Modules & File Handling | Node.js `require()` + `fs` | [`Question-02/`](./Question-02) | `npm run q2` |
| **3** | Basic ExpressJS Server | Express.js | [`Question-03/`](./Question-03) | `npm run q3` |
| **4** | ExpressJS Routing | Express.js | [`Question-04/`](./Question-04) | `npm run q4` |
| **5** | ExpressJS Custom Middleware | Express.js | [`Question-05/`](./Question-05) | `npm run q5` |
| **6** | Route-Specific Middleware | Express.js | [`Question-06/`](./Question-06) | `npm run q6` |
| **7** | REST API for Student Management | Express.js (JSON) | [`Question-07/`](./Question-07) | `npm run q7` |
| **8** | REST API with PUT and DELETE (Books) | Express.js | [`Question-08/`](./Question-08) | `npm run q8` |
| **9** | Employee Management API + Logger | Express.js | [`Question-09/`](./Question-09) | `npm run q9` |
| **10** | Mini REST API: Product Management | Express.js | [`Question-10/`](./Question-10) | `npm run q10` |
| **11** | Reusable Student Component (Props) | ReactJS | [`Question-11/`](./Question-11) | `npm run dev` (Q11) |
| **12** | Simple Counter (useState) | ReactJS | [`Question-12/`](./Question-12) | `npm run dev` (Q12) |
| **13** | Product List Modification Tracker | ReactJS (`useEffect`) | [`Question-13/`](./Question-13) | `npm run dev` (Q13) |
| **14** | Web Server with Separate Routes | Express.js | [`Question-14/`](./Question-14) | `npm run q14` |
| **15** | Employee Management Application | ReactJS (Hooks) | [`Question-15/`](./Question-15) | `npm run dev` (Q15) |
| **16** | Course Registration System | ReactJS (Context API) | [`Question-16/`](./Question-16) | `npm run dev` (Q16) |
| **17** | Student Management System (CRUD) | Express.js REST API | [`Question-17/`](./Question-17) | `npm run q17` |
| **18** | Online Event Management REST API | Express.js REST API | [`Question-18/`](./Question-18) | `npm run q18` |

---

## 🛠️ Detailed Program Descriptions & Endpoints

### 1. Basic NodeJS HTTP Server
- **File:** `Question-01/server.js`
- **Port:** 3000
- **Features:** Built with native `http` module.
  - `GET /` → Displays `"Welcome to NodeJS Lab"`
  - `GET /time` → Returns current server date and time
  - `*` → Returns `404 Page Not Found`

### 2. NodeJS Modules and File Handling
- **Files:** `Question-02/mathModule.js`, `Question-02/index.js`
- **Features:**
  - `mathModule.js` exports `add` and `multiply` using `module.exports`.
  - `index.js` imports using `require('./mathModule')`, accepts numbers from command line (or defaults), displays sum and product.
  - Demonstrates file handling: writes calculation output to `calculation_output.txt` using `fs.writeFileSync` and reads it back with `fs.readFileSync`.

### 3. Create a Basic ExpressJS Server
- **File:** `Question-03/server.js`
- **Port:** 5000 (with automatic fallback to 5050 if macOS AirPlay is active)
- **Features:**
  - `GET /` → Displays `"Welcome to ExpressJS"`
  - `GET /about` → Displays `"NodeJS Laboratory"`
  - `*` → Returns custom 404 message

### 4. ExpressJS Routing
- **File:** `Question-04/server.js`
- **Port:** 5001
- **Features:**
  - `GET /students` → List all students
  - `GET /students/:id` → Details of specific student by ID
  - `GET /faculty` → Faculty information
  - Invalid route handling

### 5. ExpressJS Middleware
- **File:** `Question-05/server.js`
- **Port:** 5002
- **Features:**
  - Custom middleware records timestamp, request method, and URL, logging to console on every request.
  - Applied globally with `app.use()`.
  - Routes: `GET /`, `GET /status`, `GET /users`.

### 6. Route-Specific Middleware
- **File:** `Question-06/server.js`
- **Port:** 5003
- **Features:**
  - Middleware checks `?role=admin` query parameter.
  - `GET /home` → Accessible to everyone without authentication.
  - `GET /dashboard` → Returns `403 Access Denied` unless `?role=admin` is supplied.

### 7. REST API for Student Management
- **File:** `Question-07/server.js`
- **Port:** 5004
- **Features:**
  - In-memory array storage for students.
  - `GET /students` → Retrieve all students in JSON format.
  - `GET /students/:id` → Retrieve student by ID in JSON format.
  - `POST /students` → Add new student from request JSON body.

### 8. REST API with PUT and DELETE (Books)
- **File:** `Question-08/server.js`
- **Port:** 5005
- **Features:**
  - Complete REST API for book catalog with status codes `200`, `201`, `400`, `404`.
  - `GET /books`, `POST /books`, `PUT /books/:id`, `DELETE /books/:id`.

### 9. ExpressJS API with Multiple Routes and Middleware (Employees)
- **File:** `Question-09/server.js`
- **Port:** 5006
- **Features:**
  - Logging middleware applied to all requests.
  - `GET /employees`, `GET /employees/:id` (returns 404 if not found), `POST /employees`.

### 10. Mini REST API: Product Management
- **File:** `Question-10/server.js`
- **Port:** 5007
- **Features:**
  - Full CRUD operations: `GET /products`, `GET /products/:id`, `POST /products`, `PUT /products/:id`, `DELETE /products/:id`.
  - Request validation and proper HTTP response status codes.

### 11. Reusable Student Component (ReactJS)
- **Files:** `Question-11/Student.jsx`, `Question-11/Program11.jsx`
- **Features:**
  - `Student` component accepts `name`, `branch`, `semester` through props.
  - Dynamic preview allowing users to enter custom student information and render new component instances.

### 12. Simple Counter with useState (ReactJS)
- **File:** `Question-12/Counter.jsx`
- **Features:**
  - Manages count state with `useState(0)`.
  - Buttons for **Increment (+1)**, **Decrement (-1)**, and **Reset (0)**.
  - Dynamic visual styling based on positive, negative, or zero state.

### 13. Product List with useState and useEffect (ReactJS)
- **File:** `Question-13/ProductList.jsx`
- **Features:**
  - `useState` manages array of products.
  - `useEffect` listens to modifications on `[products]` dependency array and triggers notification banners and log entries.
  - Interactive UI to add and delete products.

### 14. Basic Web Server with Separate Routes (ExpressJS)
- **File:** `Question-14/server.js`
- **Port:** 5008
- **Features:**
  - Express web server serving separate pages for Home (`/`), About (`/about`), and Contact (`/contact`).
  - Cohesive design with active navigation links and custom 404 page.

### 15. Employee Management Application (ReactJS)
- **Files:** `Question-15/EmployeeItem.jsx`, `Question-15/EmployeeForm.jsx`, `Question-15/EmployeeManagement.jsx`
- **Features:**
  - Full Employee Management dashboard using components, props, and React Hooks.
  - Displays employee table with edit/delete actions.
  - Modal/inline form supporting both adding and updating employees.

### 16. Course Registration System (ReactJS Context API)
- **Files:** `Question-16/CourseContext.jsx`, `Question-16/AvailableCourses.jsx`, `Question-16/SelectedCourses.jsx`, `Question-16/IntermediateLayout.jsx`, `Question-16/CourseRegistration.jsx`
- **Features:**
  - Implements React Context API (`createContext`, `useContext`) and custom hook `useCourseRegistration`.
  - Allows selecting courses and displaying enrolled courses in separate components **without passing data through intermediate components**.

### 17. Student Management System REST API (NodeJS / ExpressJS)
- **File:** `Question-17/server.js`
- **Port:** 5009
- **Features:**
  - Full CRUD operations: `GET /students`, `GET /students/:id`, `POST /students`, `PUT /students/:id`, `DELETE /students/:id`.
  - JSON middleware (`express.json()`) and input validation.

### 18. Online Event Management System REST API (ExpressJS)
- **File:** `Question-18/server.js`
- **Port:** 5010
- **Features:**
  - Event Management API: `POST /events`, `GET /events`, `GET /events/:id`, `PUT /events/:id`, `DELETE /events/:id`.
  - Custom middleware for request logging and payload validation.
  - Parameterized routes (`req.params.id`).

---

## 🧪 Testing Backend APIs with cURL

```bash
# Question 1: Time Endpoint
curl http://localhost:3000/time

# Question 4: Get Students
curl http://localhost:5001/students

# Question 6: Test Admin Auth
curl http://localhost:5003/dashboard?role=admin

# Question 8: Create Book
curl -X POST http://localhost:5005/books \
  -H "Content-Type: application/json" \
  -d '{"title": "Clean Architecture", "author": "Robert C. Martin", "year": 2017, "price": 44.99}'

# Question 10: Get Products
curl http://localhost:5007/products

# Question 17: Get Students CRUD
curl http://localhost:5009/students

# Question 18: Get Events
curl http://localhost:5010/events
```
