import { Request, Response } from "express";

export class UsersController {
  getUsers(req: Request, res: Response) {
    res.status(200).json({
      uptime: `${process.uptime()}`,
      data: { user: '👤 Dc Dev -> David Caoch Dev.' },
      timestamp: `${Date.now()}`
    });
  }
}
