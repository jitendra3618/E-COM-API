import ProductModel from "./product.model.js";

export default class ProductController{
   // 1.API FOR GET ALL THE PRODUCTS
    getAllProducts(req,res){
        const products = ProductModel.GetAll();
        res.status(200).send(products);
    }
   
    // 2.API FOR ADD THE PRODUCTS
    addProduct(req, res){
         const {name, price, sizes,imageUrl} = req.body;
    const newProduct = {
        name,
        price:parseFloat(price),
        sizes:sizes.split(','),
        imageUrl: req.file.filename,
    };
    const createdRecord=ProductModel.add(newProduct);
    res.status(201).send(createdRecord);}
//201 code shows resource has created
   //API FOR RATE PRODUCT
rateProduct(req, res) {
    const userID = req.query.userID;
    const productID = req.query.productID;
    const rating = req.query.rating;
    const error = ProductModel.rateProduct(
      userID,
      productID, 
      rating
      );
      if(error) {
        return res.status(400).send(error);
      }else{
        return res.status(200).send("rating has been added");
      }
  }
    
    // 3.API FOR GET ONE  PRODUCT BY ID
    getOneProduct(req,res){ const id = req.params.id;
        const product = ProductModel.get(id);
        if(!product){
            res.status(404).send('Product not found');
        } else{
            return res.status(200).send(product);
        }}
    // 1.API FOR FILTER THE THE PRODUCTS ACC TO PRICE SIZE CATEGORY 
    filterProducts(req, res) {
            const minPrice = req.query.minPrice;
            const maxPrice = req.query.maxPrice;
            const category = req.query.category;
            const result = ProductModel.filter(
                minPrice,
                maxPrice,
                category
            );
            res.status(200).send(result);
        }
    
}