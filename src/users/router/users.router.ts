import { BaseRouter } from "../../shared/routers/router";
import { UsersController } from "../controller/users.controller";

export class UsersRouter extends BaseRouter<UsersController>{
  constructor(){
    super(UsersController);
  }

  routes(): void {
    this.router.get("/users",this.controller.getUsers);
  }
}