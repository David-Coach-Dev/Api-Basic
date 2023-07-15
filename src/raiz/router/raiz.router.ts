import { BaseRouter } from "../../shared/routers/router";
import { RaizController } from "../controller/raiz.controller";


export class RaizRouter extends BaseRouter<RaizController>{
  constructor(){
    super(RaizController);
  }

  routes(): void {
    this.router.get("/",this.controller.getRaiz);
  }
}