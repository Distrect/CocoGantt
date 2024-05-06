import {
  Functionpoint,
  Project,
  Cocomo,
  CAF,
  Task,
  TeamMember,
} from '@prisma/client';

export type AllBaseEntites = Functionpoint | Project | Cocomo;

export {
  Functionpoint as BaseFunctionPoint,
  Project as BaseProject,
  Cocomo as BaseCocomo,
  Task as BaseTask,
};
