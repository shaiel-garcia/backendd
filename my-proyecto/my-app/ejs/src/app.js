//CALL MODULES
import express from "express";
import morgan from "morgan";
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';

//INITIALIZATIONS
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
import mainRoute from './routes/main-routes.js';
import productRoutes from './routes/product-routes.js';

//ROUTES
app.use('/', mainRoute);
app.use('/productos', productRoutes);

//SERVER
app.listen(app.get('port'), () => {
    console.log('Server on Port:', app.get('port'));
});