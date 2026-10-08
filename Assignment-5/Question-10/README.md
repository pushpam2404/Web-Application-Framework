# Question 10: Mini REST API: Product Management

## Problem Statement
Develop a complete Product Management REST API using NodeJS and ExpressJS:
- `GET /products` → Retrieve all products.
- `GET /products/:id` → Retrieve a product by ID.
- `POST /products` → Add a product.
- `PUT /products/:id` → Update a product.
- `DELETE /products/:id` → Delete a product.
- Use JSON request/response handling and appropriate HTTP status codes.

## How to Run

```bash
node Question-10/server.js
# Or:
npm run q10
```

Runs on port 5007.

## Sample Requests
```bash
# Get all products
curl http://localhost:5007/products

# Get product by ID
curl http://localhost:5007/products/1

# Add product
curl -X POST http://localhost:5007/products \
  -H "Content-Type: application/json" \
  -d '{"name": "4K Ultra-HD Webcam", "category": "Peripherals", "price": 129.99, "stock": 50}'

# Update product
curl -X PUT http://localhost:5007/products/1 \
  -H "Content-Type: application/json" \
  -d '{"price": 179.99, "stock": 40}'

# Delete product
curl -X DELETE http://localhost:5007/products/2
```
