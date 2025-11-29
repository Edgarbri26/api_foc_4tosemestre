import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// Importamos prisma para poder conectar la BD
import prisma from '../config/prisma.config.js';

// Rutas
import rolRoutes from '../routes/roles.rutas.js';
import warehouseRoutes from '../routes/warehouses.rutas.js';
import areaRoutes from '../routes/areas.rutas.js';
import productRoutes from '../routes/products.rutas.js';
import categoryRoutes from '../routes/categories.rutas.js';
import userRoutes from '../routes/users.rutas.js';

dotenv.config();

export class Servidor {
  app;
  port;
  pre;

  constructor() {
    this.app = express();
    this.port = 3800; // Puedes usar process.env.PORT || 3800
    this.pre = '/api';

    this.midelware();

    this.rutas = {
      roles: `${this.pre}/roles`,
      warehouses: `${this.pre}/warehouses`,
      users: `${this.pre}/users`,
      test: `${this.pre}/test`,
      categories: `${this.pre}/categories`,
      products: `${this.pre}/products`,
      areas: `${this.pre}/areas`
    };

    this.routes();
  }

  midelware = () => {
    this.app.use(express.json());
    this.app.use(cors());
  };

  routes = () => {
    // Solo activamos roles por ahora
    this.app.use(this.rutas.roles, rolRoutes);
    this.app.use(this.rutas.warehouses, warehouseRoutes);
    this.app.use(this.rutas.areas, areaRoutes);
    this.app.use(this.rutas.products, productRoutes);
    this.app.use(this.rutas.categories, categoryRoutes);
    this.app.use(this.rutas.users, userRoutes);

  };

  async dbConnection() {
    try {
      // Ahora sí funcionará porque importamos 'prisma' arriba
      await prisma.$connect();
      console.log('Base de Datos Online (PostgreSQL + Prisma)');
    } catch (error) {
      console.error('Error al conectar a la Base de Datos:');
      console.error(error);
      process.exit(1);
    }
  }

  async listen() {
    await this.dbConnection();

    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}