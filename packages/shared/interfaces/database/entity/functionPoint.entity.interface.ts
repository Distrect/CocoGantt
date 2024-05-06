import { IJSONConverter } from './../db.utils.interface';
import {
  ICAF,
  IFunctionPointAttributes,
} from '../../project/functionPoint.interface';
import { BaseFunctionPoint } from './base.entities';

interface IOverridedJSONField {
  attributes: IFunctionPointAttributes;
  caf: ICAF;
}

export interface IFunctionPointEntity
  extends IJSONConverter<
    BaseFunctionPoint,
    IOverridedJSONField,
    'attributes'
  > {}
