import express from 'express'
import testRoutes from '../routes/test.rutas.js'
import userRoutes from '../routes/users.rutas.js'
import rolRoutes from '../routes/roles.rutas.js'
import categoriaRoutes from '../routes/categoria.ruta.js'
import cors from 'cors'




export class Servidor {
  app;
  port;
  pre;

  constructor() {
    this.app = express();
    this.port = 3800;
    this.pre = '/api'
    this.midelware();
    this.rutas = {
      test: `${this.pre}/test`,
      user: `${this.pre}/user`,
      roles: `${this.pre}/rol`,
      categorias: `${this.pre}/categoria`,
    }
    this.routes();
  }


  midelware = () => {
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes = () => {
    this.app.use(
      this.rutas.user, userRoutes
    ),
      this.app.use(
        this.rutas.test, testRoutes
      ),
      this.app.use(
        this.rutas.roles, rolRoutes
      ),
      this.app.use(
        this.rutas.categorias, categoriaRoutes
      )
  }
  listen = () => {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server running at http://localhost:${this.port}`);
    });
  }
}





