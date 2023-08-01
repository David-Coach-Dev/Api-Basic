/**
 * @swagger
 * components:
 *  schemas:
 *    rols:
 *      type: object
 *      properties:
 *        rol:
 *          type: string
 *          description: the name of the rol
 *      additionalProperties:
 *        $ref: '#/components/schemas/BaseEntity'
 *      required:
 *        - rol
 *      example:
 *        id: uuid()
 *        rol: Admin
 *        createdAt: 2021-01-01T00:00:00.000Z
 *        updateAt: 2021-01-01T00:00:00.000Z
 */

/**
 * @swagger
 *  /rols:
 *    get:
 *      tags: [rols]
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
 *                  $ref: '#/components/schemas/rols'
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