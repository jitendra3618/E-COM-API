# E-COM-API
<h3>E-Commerce Application API</h3>
This repository contains the backend code for an E-Commerce Application API built with Node.js, Express.js, and various other technologies. The API provides endpoints for user authentication, product management, cart handling, and order processing.

<h2>API Endpoints</h2>

1. /api/users/signup<br>
Method: POST<br>
Description: Endpoint for user registration.<br>
Parameters: Username, email, password<br>
Returns: User data if successful, error message if unsuccessful.<br><br>

2. /api/users/signin<br>
Method: POST<br>
Description: Endpoint for user login.<br>
Parameters: Username, password<br>
Returns: Authentication token if successful, error message if unsuccessful.<br><br>

3. /api/users/products<br>
Method: GET<br>
Description: Endpoint to retrieve all products.<br>
Returns: List of products.<br><br>

4. /api/users/products/:id<br>
Method: GET<br>
Description: Endpoint to retrieve a specific product by ID.<br>
Parameters: Product ID<br>
Returns: Product details.<br><br>

5. /api/users/products/rate<br>
Method: POST<br>
Description: Endpoint to rate a product.<br>
Parameters: Product ID, Rating<br>
Returns: Success message.<br><br>

6. /api/users/cartItems<br>
Method: GET, POST<br>
Description: Endpoint to manage user's cart items.<br>
Returns: Cart items.<br>

7. /api/users/orders<br>
Method: GET, POST<br>
Description: Endpoint to manage user's orders.<br>
Returns: User orders.<br>

<h1>Technologies Used</h1>
<ul>
  <li>JavaScript</li>
<li>Node.js</li><
<li>Express.js</li>
<li>Postman</li>
<li>Swagger</li>
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
  <h1>Getting Started</h1>
  1.Install dependencies:<br>
    npm install<br>
  2.start server:<br>
    node server.js<br>
  3.Server has been started on port 3200<br>

  ![Screenshot (60)](https://github.com/jitendra3618/E-COM-API/assets/137607500/25609fa8-9859-4fbd-ba56-81fff9cbe65a)

  
  <h1>LIVE LINK:-</h1>

<h1>Documentation</h1>
For detailed API documentation, refer to <a href="https://swagger.io/">Swagger Documentation</a>

<h1>Contributing</h1>
Contributions are welcome! Please feel free to open issues or pull requests.

<h1>License</h1>
This project is licensed under the ISC License.

Feel free to customize this README according to your project's specific needs and preferences. Make sure to replace placeholders like your-username with actual values.






