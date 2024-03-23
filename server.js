// 1. Import express
import express from 'express';

import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';
import cartRouter from './src/features/cartItems/cartItems.routes.js';
import swagger from 'swagger-ui-express';
import apiDocs from './swagger.json' assert {type:"json"};
import cors from 'cors';
import loggerMiddleware from './src/middlewares/logger.middleware.js';


// 2. Create Server
const server = express();
server.use(loggerMiddleware);
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
//body parser convert data in JSON FORMAT
// for all requests related to product, redirect to product routes.
// localhost:3200/api/products
server.use('/api/products',loggerMiddleware, jwtAuth, productRouter);
//we want only products must be authorized

server.use("/api/cartItems",loggerMiddleware, jwtAuth, cartRouter);
server.use('/api/users',loggerMiddleware, userRouter);

// 3. Default request handler
server.get('/', (req, res)=>{
    res.send("Welcome to Ecommerce APIs");
});



server.use('/api-docs',swagger.serve,swagger.setup(apiDocs))

// 4. Middleware to handle 404 requests.
server.use((req, res)=>{
  res.status(404).send("API not found. Please check our documentation for more information at localhost:3200/api-docs")
});

// server.use(loggerMiddleware);

// 4. Specify port.
server.listen(3200,()=>{
    console.log("Server is running at 3200");
});

