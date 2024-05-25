import { Functionpoint } from '@prisma/client';
import {
  ICAF,
  IFunctionPointAttributes,
} from '../../project/functionPoint.interface';

type Modify<T, K> = Omit<T, keyof K> & K;

interface IOverridedJSONField {
  attributes: IFunctionPointAttributes;
  caf: ICAF;
}

export interface IFunctionPointEntity
  extends Modify<Functionpoint, IOverridedJSONField> {
  attributes: IFunctionPointAttributes;
  caf: ICAF;
}
