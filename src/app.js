const express = require('express');
const ProductManager = require('./ProductManager');
const port = 8080;
const server = express();

const manager = new ProductManager('./src/products.json');

// To use query params
server.use(express.urlencoded({ extended: true }))

server.get('/', (req, res) => {
  res.send('Hola mundo cruel')
})


// Enpoint /products
//? Funciona! Regresa todos los productos.
server.get('/products', async (req, res) => {
  const products = await manager.getProducts();
  res.send(products);
})



// Enpoint /products/?limit=
//! Esto funciona si dejo comentado el get anterior. COREGGIR!
// http://localhost:8080/products?limit=2 // Esto es lo mismo que el anterior.
/* server.get('/products', async (req, res) => {
  let products = await manager.getProducts();

  const limit = req.query.limit;
  if (limit) {
    products = products.slice(0, limit);
  }
  res.send(products);
}); */




// Enpoint /products/:pid
//! Esto NO funciona. COREGGIR!
server.get('/products/:pid', async (req, res) => {
  const id = req.params.pid;
  const products = await manager.getProductById(id);
  const filteredProduct = products.find(product => product.id == id);
  res.send(filteredProduct);
})



server.listen(port, () => {
  console.log(`Server running on port ${port}...`)
})