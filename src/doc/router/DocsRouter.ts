
import { BaseRouter } from "../../shared/routers/router";
import { DocsController } from "../controller/DocController";

export class DocsRouter extends BaseRouter<DocsController>{
  constructor(){
    super(DocsController);
  }

  routes():void {
    this.router.get("/docs", (req, res)=>this.controller.getDocs(req, res));
  }
}