//CALL MODULES
import express from "express";
import morgan from "morgan";
import path from 'path';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';

//INITIALIZATIONS
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//SETTINGS
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

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