export default class UserModel {
  constructor(name, email, password, type, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
    this.id = id;
  }

  static signUp(name, email, password, type) {
    
    const uppercaseRegex = /[A-Z]/; // Regex for uppercase letter
    const symbolRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;         // Regex for symbol
    const lowercaseRegex = /[a-z]/; // Regex for lowercase letter
    const digitRegex = /[0-9]/; // Regex for digit
    
   // Check if password contains at least one uppercase letter, one lowercase letter, and one digit
   if (!uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !digitRegex.test(password)||!symbolRegex.test(password)) {
    throw new Error("Password must contain at least one uppercase letter, one lowercase letter, and one digit and one symbol.");
}


    const newUser = new UserModel(
      name,
      email,
      password,
      type
    );
    newUser.id = users.length + 1;
    users.push(newUser);
    return newUser;
  }

  static signIn(email, password) {
    const user = users.find(
      (u) =>
        u.email == email && u.password == password
    );
    return user;
  }
  static getAll(){
    return users;
  }
}

//for authentication we have to use below credentials only
let users = [
  {
    id: 1,  //USERID
    name: 'Seller User',
    email: 'jitendrakr@gmail.com',
    password: 'Password@123',
    type: 'seller',
  },
  {
    id: 2,  //USERID
    name: 'Customer User',
    email: 'customer@ecom.com',
    password: 'Password@123',
    type: 'customer',
  },
];
