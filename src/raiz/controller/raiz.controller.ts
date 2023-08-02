import { Request, Response } from "express";
import os from "os";

export class RaizController {
  getRaiz(req: Request, res: Response) {
    const user = os.userInfo();
    console.log(user);
    res.status(200).json({
      user: `Bienvenido ${user.username} a la Api Rest Full Dynamic.`
    });
  }

}