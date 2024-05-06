import { EntityOmitter, IFunctionPointEntity, IProjectEntity, ModelID, BaseFunctionPoint } from 'shared';

export type CreateFunctionPointData = EntityOmitter<
  IProjectEntity,
  'projectID'
>;

export type ProjectUniqeKey = ModelID<BaseFunctionPoint,"fpID">
