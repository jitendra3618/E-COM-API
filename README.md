# E-COM-API
E-Commerce Application API
This repository contains the backend code for an E-Commerce Application API built with Node.js, Express.js, and various other technologies. The API provides endpoints for user authentication, product management, cart handling, and order processing.

API Endpoints
1. /api/users/signup
Method: POST
Description: Endpoint for user registration.
Parameters: Username, email, password
Returns: User data if successful, error message if unsuccessful.

2. /api/users/signin
Method: POST
Description: Endpoint for user login.
Parameters: Username, password
Returns: Authentication token if successful, error message if unsuccessful.

3. /api/users/products
Method: GET
Description: Endpoint to retrieve all products.
Returns: List of products.

4. /api/users/products/:id
Method: GET
Description: Endpoint to retrieve a specific product by ID.
Parameters: Product ID
Returns: Product details.

5. /api/users/products/rate
Method: POST
Description: Endpoint to rate a product.
Parameters: Product ID, Rating
Returns: Success message.

6. /api/users/cartItems
Method: GET, POST
Description: Endpoint to manage user's cart items.
Returns: Cart items.

7. /api/users/orders
Method: GET, POST
Description: Endpoint to manage user's orders.
Returns: User orders.

<h1>Technologies Used</h1>
<ul>
  <li>JavaScript</li>
<li>Node.js</li>
<li>Express.js</li>
<li>Postman</li>
<li>Swagger</li>
</ul>
#Packages Used
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
  1.Install dependencies:
    npm install
  2.start server:
    node server.js
  3.Server has been started on port 3200

  <h1>IMAGE</h1>
  ![Screenshot (60)](https://github.com/jitendra3618/E-COM-API/assets/137607500/40a03886-b923-484b-b69c-14371b0c71a6)

  
  <h1>LIVE LINK:-</h1>

<h1>Documentation</h1>
For detailed API documentation, refer to <a href="https://swagger.io/">Swagger Documentation</a>

<h1>Contributing</h1>
Contributions are welcome! Please feel free to open issues or pull requests.

<h1>License</h1>
This project is licensed under the ISC License.

Feel free to customize this README according to your project's specific needs and preferences. Make sure to replace placeholders like your-username with actual values.






