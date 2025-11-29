import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import rolesRoutes from './rutas/roles.rutas.js';
import categoriesRoutes from './rutas/categories.rutas.js';
import warehousesRoutes from './rutas/warehouses.rutas.js';
import usersRoutes from './rutas/users.rutas.js';
import areasRoutes from './rutas/areas.rutas.js';
import productsRoutes from './rutas/products.rutas.js';
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

[cite_start]// Rutas [cite: 90]
app.use('/api/roles', rolesRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/warehouses', warehousesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/areas', areasRoutes);
app.use('/api/products', productsRoutes);

export default app;