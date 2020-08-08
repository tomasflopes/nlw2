import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

interface IFilters {
  subject: string;
  week_day: number;
  time: string;
}

export default class ClassesController {
  async index(request: Request, response: Response) {
    const filters: IFilters = (request.query as unknown) as IFilters;

    if (!filters.subject || !filters.week_day || !filters.time)
      return response.status(400).json({
        error: 'Missing filters to search a class',
      });

    const timeInMinutes = convertHourToMinutes(filters.time);

    const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.week_day = ??', [
            Number(filters.week_day),
          ])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]);
      })
      .where('classes.subject', '=', filters.subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return response.json(classes);
  }

  async store(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      price,
      schedule,
    } = request.body;

    const trx = await db.transaction();

    try {
      const [user_id] = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const [class_id] = await trx('classes').insert({
        subject,
        price,
        user_id,
      });

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });

      await trx('class_schedule').insert(classSchedule);

      await trx.commit();

      return response.status(201).send();
    } catch (error) {
      await trx.rollback();

      response.status(400).json({
        error: 'Unexpected error while creating a new class',
      });
    }
  }
}
