//CALL MODULES
import { Router } from 'express';
const router = Router();

//IMPORTING CONTROLLERS
import { mainController, getFormNewProduct, addNewProduct } from '../controllers/productRoute-controllers.js';

//ROUTES
//Main page
router.get('/', mainController);

//Add a new product - GET
router.get('/create', getFormNewProduct);

//Add a new product - POST
router.post('/', addNewProduct);

//EXPORTING ROUTES
export default router;