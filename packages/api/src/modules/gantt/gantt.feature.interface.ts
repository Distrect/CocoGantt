import { ITask } from './../../database/entity/task/task.interface';

type ChangeState = 'Unchanged' | 'Deleted' | 'Updated' | 'Created';

export interface ITasChangeDTO
  extends Omit<ITask, 'taskID' | 'gantt' | 'createdAt' | 'updatedAt'> {
  taskID?: number;
  ganttID?: number;
  state: ChangeState;
}
