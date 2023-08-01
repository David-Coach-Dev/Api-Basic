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
 *        jobPosition:
 *          type: string
 *          description: the job position of the user
 *        numberPhone:
 *          type: number
 *          description: the phone number of the user
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
 *        jobPosition: Developer
 *        numberPhone: 123456789
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
