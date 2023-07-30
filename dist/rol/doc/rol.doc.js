"use strict";
/**
 * @swagger
 * components:
 *  schemas:
 *    rol:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of rol
 *        rol:
 *          type: string
 *          description: the name of the rol
 *      required:
 *        - rol
 *      example:
 *        rol: Admin
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
 *                  $ref: '#/components/schemas/rol'
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
//# sourceMappingURL=rol.doc.js.map