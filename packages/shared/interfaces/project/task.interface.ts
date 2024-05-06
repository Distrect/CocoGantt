import { ITimeStamp } from '../../local/shared.interface';

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

interface ITaskProperties {
  parentID: number;
  level: number;
  index: number;
  predecessor: string;
  isMileStone: boolean;
  isManual: boolean;
}

export interface ITask
  extends ITaskBase,
    ITaskPert,
    ITaskProperties,
    ITimeStamp {}
