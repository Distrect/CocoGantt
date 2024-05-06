import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import PrismaConnectorService from 'src/database/prismaConnector/prisma.connector.service';
import { BaseTask, ITaskEntity } from 'shared';
import { RecordNotFoundError } from 'src/shared/errors';

type TASKID = BaseTask['taskID'];

type shortCut = Partial<Omit<ITaskEntity, 'taskID'>> & {
  taskID: TASKID;
};

@Injectable()
export class TaskDAO {
  private model: Prisma.TaskDelegate;

  constructor(prisma: PrismaConnectorService) {
    this.model = prisma.task;
  }

  public async getTaskRecord(taskID: ITaskEntity['taskID']) {
    const taskRecord = await this.model.findUnique({ where: { taskID } });

    if (taskRecord === null)
      throw new RecordNotFoundError(`Record witk id ${taskID}`);
  }

  public async createTaskRecord(data: Omit<ITaskEntity, 'taskID'>) {
    const newTaskRecord = await this.model.create({ data });

    return newTaskRecord;
  }

  public async updateTaskRecord({ taskID, ...data }: shortCut) {
    const updatedTaskRecord = await this.model.update({
      data,
      where: { taskID },
    });

    if (updatedTaskRecord === null)
      throw new RecordNotFoundError(`Record witk id ${taskID}`);

    return updatedTaskRecord;
  }

  public async deleteTaskRecord(taskID: TASKID) {
    const deletedTaskRecord = await this.model.delete({ where: { taskID } });

    if (deletedTaskRecord === null)
      throw new RecordNotFoundError(`Record witk id ${taskID}`);

    return;
  }
}
