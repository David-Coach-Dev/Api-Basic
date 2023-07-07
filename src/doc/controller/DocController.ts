import { Request, Response } from "express";

export class DocsController {
  getDocs(req: Request, res: Response) {
    res.status(200).json({
      user: "Doc Dc Dev"
    });
  }
}