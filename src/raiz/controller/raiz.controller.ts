import os from "os";
import { Request, Response } from "express";

export class RaizController {
  getRaiz(req: Request, res: Response) {
    const user = os.userInfo();
    res.status(200).json({
      uptime: `${process.uptime()}`,
      data:{ msn: `Bienvenido ${user?.username ?? 'Dev'} a la Api Rest Full Dynamic.`},
      timestamp: `${Date.now()}`,
    });
  }

}
