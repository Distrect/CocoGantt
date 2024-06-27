import GanttEntity from '@entities/gantt/gant.entity';
import { IGetGanttDATA } from '@entities/gantt/gantt.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecordNotFoundError } from 'src/shared/errors';
import { Repository } from 'typeorm';

@Injectable()
export default class GanttDAO {
  constructor(
    @InjectRepository(GanttEntity)
    private ganttRepository: Repository<GanttEntity>,
  ) {}

  public async getGanttWithTasks(args: IGetGanttDATA) {
    const gantWithTaks = await this.ganttRepository.findOne({
      where: args,
      relations: { tasks: true },
    });

    if (gantWithTaks === null)
      throw new RecordNotFoundError('Gantt record not found');

    return gantWithTaks;
  }

  public async deleteGantt(args: IGetGanttDATA) {
    await this.getGanttWithTasks(args);
    await this.ganttRepository.delete(args);
  }
}
