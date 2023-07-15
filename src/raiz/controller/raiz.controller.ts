import { Request, Response } from "express";

export class RaizController {
  getRaiz(req: Request, res: Response) {
    res.status(200).json({
      user: "Bienvenido a la Api Rest Full Dynamic."
    });
  }
}