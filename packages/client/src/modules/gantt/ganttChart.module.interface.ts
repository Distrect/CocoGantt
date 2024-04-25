import type { TaskFieldsModel, ITaskData } from '@syncfusion/ej2-angular-gantt';

enum DependencyType {
  FS = 'Finish-to-Start',
  SF = 'Start-to-Finish',
  SS = 'Start-to-Start',
  FF = 'Finish-to-Finish',
}

enum DurationUnit {
  Day = 'day',
  Hour = 'hour',
  Minute = 'minute',
}

interface ITaskDependency {
  fromId: number;
  toId: number;
  type: DependencyType;
}

export interface ExtendedTaskFieldsModel extends TaskFieldsModel {
  optimisticTime: string;
}

interface ITaskBase {
  id: number;
  taskName: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  progress: number;
}

interface ITaskPert {
  optimisticTime: number;
  mostLikelyTime: number;
  pessimisticTime: number;
  successProbability: number;
}

export interface ITask extends ITaskBase, ITaskPert {}
