import ProductManager from './ProductManager';
import Express from 'express';

const server = Express();

server.use(express.urlencoded({ extended: true }))





server.listen(8080, () => {
  console.log('Server running on port 8080...')
})