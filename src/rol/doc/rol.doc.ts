/**
 * @swagger
 * components:
 *  schemas:
 *    rol:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of task
 *        rol:
 *          type: string
 *          description: the name of the task
 *      required:
 *        - rol
 *      example:
 *        rol: Dc Dev
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
 *  /rol:
 *    get:
 *      tags: [rol]
 *      summary: Get all users
 *      description:
 *        Get all users
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/User'
 *        404:
 *          description: Not Found
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/NotFound'
 *        500:
 *          description: Internal Server Error
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/NotServer'
 */