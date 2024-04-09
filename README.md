<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>

<h1>E-Commerce Application API Using REST API</h1>



<p>This repository contains the backend code for an E-Commerce Application API built with Node.js, Express.js, and various other technologies. The API provides endpoints for user authentication, product management, cart handling, and order processing.</p>

<h2>API Endpoints</h2>

<ol>
<h2>1. /api/users/signup</h2>
<ul>
  <li>Method: POST</li>
  <li>Description: Endpoint for user registration.</li>
  <li>Parameters: Username, email, password</li>
  <li>Returns: User data if successful, error message if unsuccessful.</li>
</ul>

<h2>2. /api/users/signin</h2>
<ul>
  <li>Method: POST</li>
  <li>Description: Endpoint for user login.</li>
  <li>Parameters: Username, password</li>
  <li>Returns: Authentication token if successful, error message if unsuccessful.</li>
</ul>

<h2>3. /api/users/products</h2>
<ul>
  <li>Method: GET</li>
  <li>Description: Endpoint to retrieve all products.</li>
  <li>Returns: List of products.</li>
</ul>

<h2>4. /api/users/products/:id</h2>
<ul>
  <li>Method: GET</li>
  <li>Description: Endpoint to retrieve a specific product by ID.</li>
  <li>Parameters: Product ID</li>
  <li>Returns: Product details.</li>
</ul>

<h2>5. /api/users/products/rate</h2>
<ul>
  <li>Method: POST</li>
  <li>Description: Endpoint to rate a product.</li>
  <li>Parameters: Product ID, Rating</li>
  <li>Returns: Success message.</li>
</ul>

<h2>6. /api/users/products/filter</h2>
<ul>
  <li>Method: POST</li>
  <li>Description: Endpoint to filter the products.</li>
  <li>Parameters: Product ID, price</li>
  <li>Returns: Success message.</li>
</ul>

<h2>7. /api/users/cartItems</h2>
<ul>
  <li>Method: GET</li>
  <li>Description: Endpoint to see what products are in the cart.</li>
  <li>Returns: Cart items.</li>
</ul>

<h2>8. /api/users/cartItems</h2>
<ul>
  <li>Method: POST</li>
  <li>Description: Endpoint to add products to the cart.</li>
  <li>Returns: Cart items.</li>
</ul>

<h2>9. /api/users/orders</h2>
<ul>
  <li>Method: GET, POST</li>
  <li>Description: Endpoint to manage user's orders.</li>
  <li>Returns: User orders.</li>
</ul>

<h2>10. /api/products/like</h2>
<ul>
  <li>Method: GET, POST</li>
  <li>Description: Endpoint to manage user's like count.</li>
  <li>Returns: User likes.</li>
</ul>

</ol>

<h2>Glance of the website</h2>
![Screenshot (60)](https://github.com/jitendra3618/E-COM-API/assets/137607500/25609fa8-9859-4fbd-ba56-81fff9cbe65a)
<h2>Technologies Used</h2>

<ul>
  <li>JavaScript</li>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>Postman</li>
  <li>Swagger</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
</ul>

<h2>Packages Used</h2>

<ul>
  <li>Body Parser</li>
  <li>CORS</li>
  <li>Express Basic Auth</li>
  <li>JSON Web Token</li>
  <li>Multer</li>
  <li>Swagger UI Express</li>
  <li>Winston</li>
</ul>

<h2>Getting Started</h2>

<ol>
  <li>Install dependencies:</li>
  <code>npm install</code><br>
  <li>Start server:</li>
  <code>node server.js</code><br>
  <li>Server has been started on port 3200:</li>
  <a href="http://localhost:3200">http://localhost:3200</a>
</ol>

<h2>Documentation</h2>

<p>For detailed API documentation, refer to <a href="https://swagger.io/">Swagger Documentation</a>.</p>

<h2>Contributing</h2>

<p>Contributions are welcome! Please feel free to open issues or pull requests.</p>

<h2>License</h2>

<p>This project is licensed under the ISC License.</p>


</body>
</html>

  ![Screenshot (60)](https://github.com/jitendra3618/E-COM-API/assets/137607500/25609fa8-9859-4fbd-ba56-81fff9cbe65a)

  
  <h3>You can run project on port no 3200:-</h3>
  http://localhost:3200

<h1>Documentation</h1>
For detailed API documentation, refer to <a href="https://swagger.io/">Swagger Documentation</a>

<h1>Contributing</h1>
Contributions are welcome! Please feel free to open issues or pull requests.

<h1>License</h1>
This project is licensed under the MIT License.







