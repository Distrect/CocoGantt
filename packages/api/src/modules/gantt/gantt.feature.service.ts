import { Injectable } from '@nestjs/common';
import GanttDAO from '@entities/gantt/gantt.dao';
import TaskDAO from '@entities/task/task.dao';
import { ITasChangeDTO } from './gantt.feature.interface';

@Injectable()
export default class GanttFeatureService {
  constructor(
    private ganttDAO: GanttDAO,
    private taskDAO: TaskDAO,
  ) {}

  public async applyChanges(data: ITasChangeDTO[]) {
    const updatedTasks: any[] = [];
    const deletedTasks: any[] = [];
    const createdTasks: any[] = [];

    for (const task of data) {
      if (task.state === 'Unchanged') continue;

      switch (task.state) {
        case 'Created':
          const { taskID, ...rest } = task;
          createdTasks.push(rest);
          break;

        case 'Deleted':
          if (task.taskID === undefined)
            throw new Error("Data missing 'taskID' attribute");

          const gantt = task.ganttID
            ? { gantt: { ganttID: task.ganttID } }
            : {};

          deletedTasks.push({
            taskID: task.taskID,
            gantt,
          });
          break;

        case 'Updated':
          if (task.taskID === undefined)
            throw new Error("Data missing 'taskID' attribute");

          updatedTasks.push(task);

        default:
          throw new Error('Unknown error');
      }
    }

    const [createdTaskEntities, updatedTaskEntites, deletedTaskEntites] =
      await Promise.all([
        this.taskDAO.bulkCreateTaskRecords(createdTasks),
        this.taskDAO.bulkUpdateTaskRecords(updatedTasks),
        this.taskDAO.bulkDeleteTaskRecords(deletedTasks),
      ]).then((res) => res);

    return { createdTaskEntities, updatedTaskEntites, deletedTaskEntites };
  }
}
