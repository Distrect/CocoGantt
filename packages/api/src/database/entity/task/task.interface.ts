import TaskEntity from '@entities/task/task.entity';

type TaskKeys = keyof TaskEntity;

export interface ITask extends Pick<TaskEntity, TaskKeys> {}

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
