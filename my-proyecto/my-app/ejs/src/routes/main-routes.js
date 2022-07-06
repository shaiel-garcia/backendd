//CALL MODULES
import { Router } from 'express';
const router = Router();

//ROUTES
//Main page
router.get('/', (req, res) => {
    res.redirect('/productos');
});

export default router;