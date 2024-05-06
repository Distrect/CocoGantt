import { Functionpoint } from '@prisma/client';
import {
  BaseFunctionPoint,
  IFunctionPointAttributes,
  ModelID,
} from 'shared/interfaces';

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

export type FPID = ModelID<BaseFunctionPoint, 'fpID'>;
