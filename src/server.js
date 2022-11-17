import express from 'express';
import carritosRouter from './routes/carritoRouter.js';
import productosRouter from './routes/productosRoutes.js';
import userRouter from './routes/userRouter.js';
import hbs from 'express-handlebars';

import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);

// import {
//     productosDao as productosApi,
//     carritosDao as carritosApi
// } from './daos/index.js';

//--------------------------------------------
// instancio servidor y persistencia

const app = express()

//--------------------------------------------
// midleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//app.use(express.static('public'));

app.engine('.hbs', hbs({ extname: '.hbs', defaultLayout: 'main.hbs' }));
app.set('view engine', '.hbs');

app.use(express.static(__dirname + './views'));

//--------------------------------------------
// configuro el servidor

app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)
app.use('/api/use', userRouter)

export default app
