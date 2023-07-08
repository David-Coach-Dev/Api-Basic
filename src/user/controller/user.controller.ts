import { Request, Response } from "express";

export class UserController {
  /**
   * @swagger
   * components:
   *  schemas:
   *    User:
   *      type: object
   *      properties:
   *        id:
   *          type: string
   *          description: the auto-generated id of task
   *        user:
   *          type: string
   *          description: the name of the task
   *      required:
   *        - user
   *      example:
   *        user: Dc Dev
   *    NotFound:
   *      type: object
   *      properties:
   *        msg:
   *          type: string
   *          description: Not found
   *      example:
   *        msg: not found
   *    NotServer:
   *      type: object
   *      properties:
   *        msg:
   *          type: string
   *          description: Error in the server
   *      example:
   *        msg: Error in the server
   *
   *  parameters:
   *    UserId:
   *      in: path
   *      name: id
   *      required: true
   *      schema:
   *        type: string
   *      description: the task id
   */
  
  /**
   * @swagger
   * tags:
   *  name: Api
   *  description: Api endpoint
   */

  /**
   * @swagger
   *  /user:
   *    get:
   *      tags: [user]
   *      summary: Get all users
   *      description:
   *        Get all users
   *      responses:
   *        200:
   *          description: Success
   *          content:
 *              application/json:
  *               schema:
  *                 type: array
  *                 items:
  *                   $ref: '#/components/schemas/User'
   *        404:
   *          description: Not Found
   *          content:
 *              application/json:
  *               schema:
  *                 type: array
  *                 items:
  *                   $ref: '#/components/schemas/NotFound'
   *        500:
   *          description: Internal Server Error
   *          content:
 *              application/json:
 *                schema:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/NotServer'
   */
  getUsers(req: Request, res: Response) {
    res.status(200).json({
      user: "Dc Dev"
    });
  }
}