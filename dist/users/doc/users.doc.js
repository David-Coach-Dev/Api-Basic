"use strict";
/**
 * @swagger
 * components:
 *  schemas:
 *    users:
 *      description: The user entity
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the name of the user
 *        lastName:
 *          type: string
 *          description: the last name of the user
 *        userName:
 *          type: string
 *          description: the user name of the user
 *        email:
 *          type: string
 *          description: the email of the user
 *        password:
 *          type: string
 *          description: the password of the user
 *        city:
 *          type: string
 *          description: the city of the user
 *        province:
 *          type: string
 *          description: the province of the user
 *        country:
 *          type: string
 *          description: the country of the user
 *        numberPhone:
 *          type: number
 *          description: the phone number of the user
 *        rol:
 *          type: string
 *          description: the rol of the user
 *        status:
 *          type: string
 *          description: the status of the user
 *        avatar:
 *          type: string
 *          description: the avatar of the user
 *        token:
 *          type: string
 *          description: the token of the user
 *      additionalProperties:
 *        $ref: '#/components/schemas/BaseEntity'
 *      required:
 *        - id
 *        - name
 *        - lastName
 *        - numberPhone
 *      notRequired:
 *        - jobPosition
 *      example:
 *        id: uuid()
 *        name: Dc
 *        lastName: Dev
 *        userName: dcdev
 *        email: dcdevty@gmail.com
 *        password: 123456
 *        city: Guayaquil
 *        province: Guayas
 *        country: Ecuador
 *        numberPhone: 123456789
 *        jobPosition: Developer
 *        rol: Admin
 *        status: Active
 *        avatar: https://img.com/avatr1.png
 *        token: 123456789
 *        createdAt: 2021-01-01T00:00:00.000Z
 *        updateAt: 2021-01-01T00:00:00.000Z
 *   */
/**
 * @swagger
 *  /users:
 *    get:
 *      tags: [users]
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
 *                  $ref: '#/components/schemas/users'
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
//# sourceMappingURL=users.doc.js.map