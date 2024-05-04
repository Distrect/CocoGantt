import { Functionpoint } from '@prisma/client';
import { IFunctionPointAttributes } from 'shared';

interface IOverridedJSONField {
  attributes: IFunctionPointAttributes;
}

type IFunctionPointOverrided = Omit<Functionpoint, 'attributes'> &
  IOverridedJSONField;

export interface IFunctionPointEntity extends IFunctionPointOverrided {}

export type ConvertMode = 'toString' | 'toJSON';

export type ConvertOutput<T extends ConvertMode> = T extends 'toString'
  ? IFunctionPointEntity
  : Functionpoint;

export type Omitter = Omit<IFunctionPointEntity, 'fpID'>;

export type ModelID = Functionpoint['fpID'];
