import { Request, Response } from "express";

export class StartController {
  getStart(req: Request, res: Response) {
      res.status(200).json({
        uptime: `${process.uptime()}`,
        message: 'OK',
        timestamp: `${Date.now()}`
      });
  }
}