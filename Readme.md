# Express Server in Product Manager Project


## About the Project

The project includes a Product Manager that can perform the following functions:

  - Create a json file with an array of products, if the json file does not already exist.
  - Add products to json file.
  - Consult all products in the json file.
  - Seach for a product by id.
  - Updated a product by id.
  - Delete a product by id.

Also includes an App file that creates and runs a Express Server on port 8080, uses the functions of the Product Manager file with the following endpoints:

  - '/': endpoint to run the server
  - '/products' endpoint to consult all products
  - '/products/id' endpoint to consult a product by id
  - '/product?limit=' endpoint to consult a limited list of products


## Technologies and Tools

- [VSCode](https://code.visualstudio.com/)
- [NPM](https://www.npmjs.com/)
- [NodeJs](https://nodejs.org/en)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/)

## Get Started!


  - Clone the repository:
    ```
    git clone https://github.com/escuderoemanuel/NodeExpressProductManager.git
    ```

  - Open project folder with VSCode or your preferred editor
  
  - Install dependencies:
    ```
    npm install
    ```
  
  - Run the server:
    ```
    npm start
    ```
    or
    ```
    nodemon app
    ```

  - In your browser, open the url:
    ```
    http://localhost:8080
    ```



## Endpoint Testing


- Consult all products in the json file, with the endpoint:
  
  [http://localhost:8080/products](http://localhost:8080/products)

- Consult a limited list of products in the json file, with a limit parameter :
  
  [http://localhost:8080/products?limit=5](http://localhost:8080/products?limit=5)

- Consult a product in the json file, with a pid parameter:
  
  [http://localhost:8080/products/5](http://localhost:8080/products/5)

- Consult to verify error searching nonexistent id:
  
  [http://localhost:8080/products/34123123](http://localhost:8080/products/34123123)

