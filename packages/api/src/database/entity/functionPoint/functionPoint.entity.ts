import { Functionpoint } from '@prisma/client';
import { IFunctionPointAttributes } from 'shared';
import { IFunctionPointEntity } from 'src/database/entity/functionPoint/functionPoint.entity.interface';

export class FunctionPointEntity implements IFunctionPointEntity {
  public fpID: number;
  public attributes: IFunctionPointAttributes;
}
