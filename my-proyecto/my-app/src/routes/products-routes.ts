//CALL MODULES
import { Router } from 'express';
const router = Router();

//IMPORTING CONTROLLERS
import { getAllProducts, getOneProduct } from '../controllers/products-controllers';
import adminRoutes from './admin/adminRoutes';

//ROUTES
//Get all products
router.get('/', getAllProducts);

//Get one product by its id
router.get('/:id', getOneProduct);

//ADMIN ROUTES
router.use('/', adminRoutes);

//EXPORTING ROUTES
export default router;