import { Router } from 'express';

export class MainRouter {
  router: Router;
    role_router: RoleRouter;
    constructor() {
    this.router = Router();
    this.role_router = new RoleRouter();
    this.routes();
  }
    private routes() {
    this.router.use('/', this.role_router.getRouter());
  }
    public getRouter() {
    return this.router;
    }
}


// export class RoleRouter {
//   router: Router;
//   role_controller: RoleController;
//   role_validator: RoleValidator;
//   constructor() {
//     this.router = Router();
//     this.role_controller = new RoleController();
//     this.role_validator = new RoleValidator();
//     this.routes();
//   }

//   private routes() {
//     this.router.get('/', this.role_controller.getAll);
//     this.router.get('/:id', this.role_controller.getOne);
//     this.router.post(
//       '/',
//       ...this.role_validator.validateRole,
//       validateFields,
//       this.role_validator.validateIfNameIsUse,
//       this.role_controller.created,
//     );
//   }

//   public getRouter() {
//     return this.router;
//   }
// }
