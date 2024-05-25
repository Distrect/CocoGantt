import CocomoEntity from '@entities/cocomo/cocomo.entity';
import { CocomoMode } from 'shared';

export interface ICreateCocomoDATA {
  mode: CocomoMode;
  kloc: number;
  project?: {
    projectID: number;
  };
}

export type IGetCocomoDATA =
  | { cocomoID: number }
  | { project: { projectID: number } }
  | { project: { projectID: number }; cocomoID: number };

export type IUpdateCocomoDATA = Partial<Omit<CocomoEntity, 'cocomoID'>>;
