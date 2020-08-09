import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConnectionController {
  async index(request: Request, response: Response) {
    const [data] = await db('connection').count('* as total');

    const { total } = data;

    return response.json({ total });
  }

  async store(request: Request, response: Response) {
    const { user_id } = request.body;

    console.log(user_id);

    await db('connection').insert({
      user_id,
    });

    return response.status(201).send();
  }
}
