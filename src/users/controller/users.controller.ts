import { Request, Response } from "express";

export class UsersController {
  getUsers(req: Request, res: Response) {
    res.status(200).json({
      Msn: "Dc Dev"
    });
  }
}