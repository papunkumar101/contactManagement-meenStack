
# Contact Management

 Contact Management website using  mongo, express, ejs and node

## Used Concept or Covered Topic

1. ejs - EJS(Embedded JavaScript) is a templates engine. which is help to design and display the content on the browser.
2. express - it's a fast, unopinionated, minimalist web framework for Node.js.
3. express-session - way to store data in server and  manage and maintain stateful information for users. used here in login module.
4. joi - The most powerful schema description language and data validator for JavaScript. used to validate the user input or form data.
5. jsonwebtoken(JWT) - Use of this library is, we can generate unique and secure token for user authontication and expaire the token by set ttl.
6. mongoose - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. used for manupulate with app datas.
7. nodemailer - Send emails from Node.js. (i did't used in app but you can check this in '/test' this route)
8. nodemon - nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
9. swagger-ui-express - This module allows you to serve auto-generated swagger-ui generated API docs from express, based on a swagger.json file. The result is living documentation for your API hosted from your API server via a route.
10. winston - this library is used to create logs.
11. bcrypt -  used to encrypt decrypt the text or password.
12. bodyParser -  used to esaly get the params or request datas.
13. dotenv - Used to storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

## Introduction

Welcome to our contact management application! This application has been meticulously crafted following the Model-View-Controller (MVC) design pattern to ensure code organization and readability. While this project serves as a practice exercise, it offers valuable functionality by allowing users to securely store and manage their contact information online.

## Features

List the key features and functionalities:

- user can store the contact
- after login user can access the bulk contact which is in database
- can access REST API for CURD the contact

## Installation

Instructions to install and set up:

- Stape1 : clone the repository by command : git clone https://github.com/papunkumar101/contactManagement-meenStack.git
- Stape2 : install and update the used packages by command : npm install or npm i
- Stape3 : run the project by command : npm start
- stape4 : server will be run on port no 1010, so open the url : http://localhost:1010/
