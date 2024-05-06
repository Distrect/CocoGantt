import { Injectable } from '@nestjs/common';
import PrismaConnectorService from 'src/database/prismaConnector/prisma.connector.service';
import {
  IFunctionPointEntity,
  ConvertMode,
  ConvertOutput,
  BaseFunctionPoint,
} from 'shared';
import { IFunctionPointAttributes } from 'shared';
import { FPID } from './functionPoint.entity.interface';
import { RecordNotFoundError } from 'src/shared/errors';

@Injectable()
export class FunctionPointDao {
  constructor(private prisma: PrismaConnectorService) {}

  private functionPointConverter<T extends ConvertMode>(
    mode: T,
    data: ConvertOutput<T, IFunctionPointEntity, BaseFunctionPoint>,
  ) {
    if (mode === 'toJSON') {
      (data as IFunctionPointEntity).attributes = JSON.parse(
        data.attributes as string,
      );

      return data;
    }

    (data as BaseFunctionPoint).attributes = JSON.stringify(
      data.attributes as IFunctionPointAttributes,
    );

    return data;
  }

  public async getFunctionPoint(fpID: FPID) {
    const functionPointRecord = await this.prisma.functionpoint.findUnique({
      where: { fpID },
    });

    if (functionPointRecord === null) {
      throw new RecordNotFoundError('Record Not Found');
    }

    return functionPointRecord;
  }

  public async createFunctionPoint(data: IFunctionPointAttributes) {
    const newFunctionPointRecord = await this.prisma.functionpoint.create({
      data: { attributes: JSON.stringify(data) },
    });

    return this.functionPointConverter('toJSON', newFunctionPointRecord);
  }

  public async deleteFunctionPoint(fpID: FPID) {
    const deletedRecord = await this.prisma.functionpoint.delete({
      where: { fpID },
    });

    if (deletedRecord === null)
      throw new RecordNotFoundError('Record Not Found');

    return deletedRecord;
  }

  public async updateFunctionPoint(
    functionPointID: FPID,
    attributes: IFunctionPointAttributes,
  ) {
    const updatedRecord = await this.prisma.functionpoint.update({
      data: { attributes: JSON.stringify(attributes) },
      where: { fpID: functionPointID },
    });

    if (updatedRecord === null)
      throw new RecordNotFoundError('Record Not Found');

    return this.functionPointConverter('toJSON', updatedRecord);
  }
}
