import { BaseRouter } from "../../shared/routers/router";
import { UserController } from "../controller/user.controller";

export class UserRouter extends BaseRouter<UserController>{
  constructor(){
    super(UserController);
  }

  routes(): void {
    this.router.get("/user",this.controller.getUsers);
  }
}