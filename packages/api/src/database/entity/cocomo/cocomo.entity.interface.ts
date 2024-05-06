import { ICocomoEntity } from 'shared';

export type UpdateRecordData = {
  cocomoID: ICocomoEntity['cocomoID'];
} & Partial<Omit<ICocomoEntity, 'cocomoID'>>;
