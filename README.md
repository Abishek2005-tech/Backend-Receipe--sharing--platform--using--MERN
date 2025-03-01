# Backend-Recipe-Sharing-Platform-MERN

This is the backend for a *Recipe Sharing Platform* built using the MERN stack (MongoDB, Express.js, React, Node.js). The backend provides APIs for user authentication, recipe management, and interactions.

## 🛠 Tech Stack

- *Node.js* - Runtime environment  
- *Express.js* - Backend framework  
- *MongoDB* - Database  
- *Mongoose* - ODM for MongoDB  
- *JWT* - Authentication  
- *bcrypt* - Password hashing  

## 🚀 Features

- User Authentication (Login, Signup)  
- Create, Read, Update, and Delete (CRUD) for recipes  
- Image upload for recipes  
- User profile management  
- Favorite and like recipes  
- Search and filter recipes  

## 📂 Project Structure


Backend-Recipe-Sharing-Platform-MERN
│── node_modules/ 
│── config/           # Database configuration
│── models/           # Mongoose schemas
│── routes/           # API routes
│── controllers/      # Route logic
│── middleware/       # Auth middleware
│── uploads/          # Recipe images
│── server.js         # Entry point
│── package.json      # Dependencies
│── README.md         # Documentation


## 🔧 Installation

1. *Clone the repository*  
   bash
   git clone https://github.com/your-username/Backend-Recipe-Sharing-Platform-MERN.git
   cd Backend-Recipe-Sharing-Platform-MERN
   

2. *Install dependencies*  
   bash
   npm install
   

3. **Create a .env file in the root directory**  
   env
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   

4. *Run the server*  
   bash
   npm start
   

5. *API Endpoints*  
   - GET /api/recipes - Get all recipes  
   - POST /api/recipes - Add a new recipe  
   - PUT /api/recipes/:id - Update a recipe  
   - DELETE /api/recipes/:id - Delete a recipe  
   - POST /api/auth/signup - Register a new user  
   - POST /api/auth/login - User login  

## 🎯 Contributing

Feel free to fork and contribute!
