const express = require('express');
const ProductManager = require('./ProductManager');
const port = 8080;
const server = express();

manager = new ProductManager('./src/products.json');

// To use query params
server.use(express.urlencoded({ extended: true }))

server.get('/', (req, res) => {
  res.send('Hola mundo cruel')
})

// Enpoint '/products'
// Example: http://localhost:8080/products
// Support query: ?limit=3
// Example: http://localhost:8080/products/?limit=3
server.get('/products', async (req, res) => {
  let products = await manager.getProducts();

  // limit is a string in the url, so we need to convert it to a number to avoid errors
  const limit = parseInt(req.query.limit);

  if (limit) {
    products = products.slice(0, limit);
  }

  res.send(products);
});

// Enpoint /products/:pid
// Example: http://localhost:8080/products/2
server.get('/products/:pid', async (req, res) => {

  // pid is a string in the url, so we need to convert it to a number to avoid errors
  const id = parseInt(req.params.pid);

  const product = await manager.getProductById(id);
  res.send(product);
})


server.listen(port, () => {
  console.log(`Server running on port ${port}...`)
})