import { getDB } from "../../config/mongodb.js";
import { ApplicationError } from "../../error-handler/applicationError.js";

class UserRepository{

  
      constructor(){
        this.collection = "users"; //name of collection created
    }
    async signUp(newUser) {
    //   const uppercaseRegex = /[A-Z]/; // Regex for uppercase letter
    //   const symbolRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;         // Regex for symbol
    //   const lowercaseRegex = /[a-z]/; // Regex for lowercase letter
    //   const digitRegex = /[0-9]/; // Regex for digit
      
    //  // Check if password contains at least one uppercase letter, one lowercase letter, and one digit
    //  if (!uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !digitRegex.test(password)||!symbolRegex.test(password)) {
    //   throw new Error("Password must contain at least one uppercase letter, one lowercase letter, and one digit and one symbol.");}
                                                              
  //CODE BELOW FOR CONNECTING WITH DATABASE

        try{
          // 1. Get the database
        const db = getDB();
        // 2. Get the collection
        const collection = db.collection(this.collection);
        
        // 3. Insert the document.
        await collection.insertOne(newUser);
        return newUser;
        } catch(err){
          console.log(err);
          throw new ApplicationError("Something went wrong with database", 500);
        }
      }

      async signIn(email, password) {
        try{
          // 1. Get the database
        const db = getDB();
        // 2. Get the collection
        const collection = db.collection("users");
        
        // 3. Find the document.
        return await collection.findOne({email, password});
        } catch(err){
          console.log(err);
          throw new ApplicationError("Something went wrong with database", 500);
        }
      }
      async findByEmail(email) {
        try{
          // 1. Get the database
        const db = getDB();
        // 2. Get the collection
        const collection = db.collection("users");
        
        // 3. Find the document.
        return await collection.findOne({email});
        } catch(err){
          console.log(err);
          throw new ApplicationError("Something went wrong with database", 500);
        }
      }
}

export default UserRepository