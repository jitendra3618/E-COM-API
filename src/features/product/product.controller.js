import ProductModel from "./product.model.js";
import ProductRepository from './product.repository.js';

export default class ProductController{
    constructor(){
        this.productRepository = new ProductRepository();
      }
    // 1.API FOR GET ALL THE PRODUCTS
    async getAllProducts(req,res){
        try{
            const products = await this.productRepository.getAll();
          res.status(200).send(products);
          } catch(err){
          console.log(err);
          return res.status(200).send("Something went wrong");
         }    
    }
   
    // 2.API FOR ADD THE PRODUCTS
    async addProduct(req, res){
        try{
            const { name, price, sizes } = req.body;
            const newProduct = new ProductModel(name,null, parseFloat(price),
            req.file.filename, null, sizes.split(',')
            );
        
            const createdProduct = await this.productRepository.add(newProduct);
            res.status(201).send(createdProduct);
          }catch(err){
            console.log(err);
            return res.status(200).send("Something went wrong");
          }}
//201 code shows resource has created


   //API FOR RATE PRODUCT
  async rateProduct(req, res, next) {
    try{
      const userID = req.userID;
      console.log("controller="+userID);
      const productID = req.body.productID;
      const rating = req.body.rating;

      await this.productRepository.rate(
        userID,
        productID, 
        rating
        );
        return res
          .status(200)
          .send('Rating has been added');
    } catch(err){
      console.log(err);
      console.log("Passing error to middleware");
      next(err);
    }
  }   
  
    // 3.API FOR GET ONE  PRODUCT BY ID
    async getOneProduct(req,res){ try{
        const id = req.params.id;
        const product = await this.productRepository.get(id);
        if (!product) {
          res.status(404).send('Product not found');
        } else {
          return res.status(200).send(product);
        }
      } catch(err){
      console.log(err);
      return res.status(200).send("Something went wrong");
    }
    
    }
    // 1.API FOR FILTER THE THE PRODUCTS ACC TO PRICE SIZE CATEGORY 
   async filterProducts(req, res) {
      try{
        const minPrice = req.query.minPrice;
        const maxPrice = req.query.maxPrice;
        const category = req.query.category;
        const result = await this.productRepository.filter(
          minPrice,
          maxPrice,
          category
        );
        res.status(200).send(result);
        }catch(err){
          console.log(err);
          return res.status(200).send("Something went wrong");
        }
        }
    
}