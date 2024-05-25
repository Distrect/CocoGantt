import TaskEntity from '@entities/task/task.entity';
import {
  ICreateTaskDATA,
  IGetTaskDATA,
  IUpdateTaskDATA,
} from '@entities/task/task.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecordNotFoundError } from 'src/shared/errors';
import { FindManyOptions, FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export default class TaskDAO {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  public async getTaskRecord(args: IGetTaskDATA) {
    const taskRecord = await this.taskRepository.findOne({ where: args });

    if (taskRecord === null)
      throw new RecordNotFoundError(`Task record with id ${args.taskID}`);

    return taskRecord;
  }

  public async getTaskRecords(args: FindManyOptions<TaskEntity>) {
    const taskRecords = await this.taskRepository.find(args);

    return taskRecords;
  }

  public async bulkCreateTaskRecords(data: ICreateTaskDATA[]) {
    const newTaskRecords = await this.taskRepository.save(data);

    return newTaskRecords;
  }

  public async bulkUpdateTaskRecords(data: IUpdateTaskDATA[]) {
    const updatedTaskRecords = await this.taskRepository.save(data);

    return updatedTaskRecords;
  }

  public async bulkDeleteTaskRecords(args: IGetTaskDATA[]) {
    await this.taskRepository
      .createQueryBuilder()
      .delete()
      .from(TaskEntity)
      .whereInIds(args)
      .execute();

    return args;
  }
}
