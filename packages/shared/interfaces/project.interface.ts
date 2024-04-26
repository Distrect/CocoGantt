import { ITimeStamp } from '../local/shared.interface';

export interface IProject extends ITimeStamp {
  projectID: number;
  projectName: string;
}
