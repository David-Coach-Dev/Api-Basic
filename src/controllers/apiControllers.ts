import { Request, Response } from 'express';

async function test(request: Request, response: Response): Promise<void> {
  response.send('test Ok');
}

export default {
  test
};