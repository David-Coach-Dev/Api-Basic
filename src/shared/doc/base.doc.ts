/**
 * @swagger
 * components:
 *  schemas:
 *    BaseEntity:
 *      type: object
 *      description: The base entity
 *      properties:
 *        id:
 *          type: string
 *          format: uuid
 *          description: The system auto-generates the record id.
 *        createdAt:
 *          type: timestamp
 *          description: The system auto-generates the record creation date.
 *        updateAt:
 *          type: timestamp
 *          description: The system auto-generates the record update date.
 *      required:
 *        - id
 *        - createdAt
 *        - updateAt
 *      example:
 *        id: uuid()
 *        createdAt: 2021-01-01T00:00:00.000Z
 *        updateAt: 2021-01-01T00:00:00.000Z
 *
 *    NotFound:
 *      type: object
 *      description: Not found
 *      properties:
 *        msg:
 *          type: string
 *          description: Not found
 *      example:
 *        msg: not found
 *
 *    NotServer:
 *      type: object
 *      description: Error in the server
 *      properties:
 *        msg:
 *          type: string
 *          description: Error in the server
 *      example:
 *        msg: Error in the server
 *
 *  parameters:
 *    Id:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the search id
 */