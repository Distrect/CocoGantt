import {
  IFunctionPointEntity,
  IProjectEntity,
  ITaskEntity,
  AllBaseEntites,
} from './entity';

type AllEntities = IFunctionPointEntity | IProjectEntity | ITaskEntity;

export type ModelID<T extends AllBaseEntites, K extends keyof T> = T[K];

export type ConvertMode = 'toString' | 'toJSON';

export type ConvertOutput<
  T extends ConvertMode,
  K extends any,
  L extends any,
> = T extends 'toString' ? K : L;

export type IJSONConverter<
  T extends AllBaseEntites,
  Z extends Object,
  K extends keyof T,
> = Omit<T, K> & Z;

export type EntityOmitter<T extends AllEntities, K extends keyof T> = Omit<
  T,
  K
>;

export type ReturnConverter<
  T extends ConvertMode,
  I1 = any,
  I2 = any,
> = T extends 'toString' ? I1 : T extends 'toJSON' ? I2 : never;
