import { Task } from '@prisma/client';

export default class TaskEntity implements Task {
  public taskID: number;
  public taskName: string;
  public startDate: Date;
  public endDate: Date;
  public duration: number;
  public progress: number;
  public optimisticTime: number;
  public mostLikelyTime: number;
  public pessimisticTime: number;
  public successProbability: number;
  public parentID: number;
  public level: number;
  public index: number;
  public predecessor: string;
  public isMileStone: boolean;
  public isManual: boolean;

  public crashDay: number;
  public crashCost: number;
  public normalCost: number;
}
