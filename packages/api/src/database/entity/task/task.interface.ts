import GanttEntity from '@entities/gantt/gant.entity';
import TaskEntity from '@entities/task/task.entity';
import { PredecessorType } from 'shared/interfaces/project/task.interface';

export type IGetTaskDATA =
  | {
      taskID: number;
    }
  | {
      ganttID: number;
      taskID: number;
    };

export type IUpdateTaskBody = Partial<
  Omit<TaskEntity, 'taskID' | 'updatedAt' | 'createdAt'>
>;

export type IUpdateTaskDATA = IUpdateTaskBody & IGetTaskDATA;

export type ICreateTaskDATA = Omit<
  TaskEntity,
  'taskID' | 'updatedAt' | 'createdAt'
>;
