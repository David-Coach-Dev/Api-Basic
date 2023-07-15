import { BaseRouter } from "../../shared/routers/router";
import { StartController } from "../controller/start.controller";

export class StartRouter extends BaseRouter<StartController>{
  constructor(){
    super(StartController);
  }
  routes(): void {
    this.router.get("/",this.controller.getStart);
  }
}