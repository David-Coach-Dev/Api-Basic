import { Request, Response } from "express";

export class StartController {
  getStart(req: Request, res: Response) {
    res.status(200).json({
      uptime: `${process.uptime()}`,
      data: { error: "☠️ Ruta no validad..." },
      timestamp: `${Date.now()}`,
    });
  }
}
