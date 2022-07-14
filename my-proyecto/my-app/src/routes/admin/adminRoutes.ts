//CALL MODULES
import { Router, Request, Response, NextFunction } from 'express';
const router = Router();

const admin = false;

//IMPORTING CONTROLLERS
import { addNewProduct, updateProduct, deleteProduct } from '../../controllers/products-controllers';

//MIDDLEWARES
function areYouAdmin(_req: Request, _res: Response, next: NextFunction) {
    if (admin) {
        next();
    } else {
        const err: any = new Error('You are not authorized to access this route');
        err.status = 401;
        next(err);
    }
};

//ROUTES
//Post Add new product
router.post('/', areYouAdmin, addNewProduct);

//Put Update product by its id
router.put('/:id', areYouAdmin, updateProduct);

//Delete product by its id
router.delete('/:id', areYouAdmin, deleteProduct);

export default router;