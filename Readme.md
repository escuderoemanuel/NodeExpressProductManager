# Express Server in Product Manager Project



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

