import { Router } from 'express';
import { getProducts, addProduct } from '../controllers/productController';

const routerp = Router();

routerp.get('/products', getProducts);
routerp.post('/products', addProduct);

export default routerp;