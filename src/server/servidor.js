import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// Importamos prisma para poder conectar la BD
import prisma from '../config/prisma.config.js'; 

// Rutas
import rolRoutes from '../routes/roles.rutas.js';
// Comentamos estas hasta que crees los archivos, si no, darán error "Module not found"
// import testRoutes from '../routes/test.rutas.js';
// import userRoutes from '../routes/usuer.rutas.js';
// import categoriaRoutes from '../routes/categoria.ruta.js';

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
      // test: `${this.pre}/tests`,
      // user: `${this.pre}/users`,
      roles: `${this.pre}/roles`,
      // categorias: `${this.pre}/categorias`,
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

    // this.app.use(this.rutas.user, userRoutes);
    // this.app.use(this.rutas.test, testRoutes);
    // this.app.use(this.rutas.categorias, categoriaRoutes);
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