import FunctionPointEntity from '@entities/functionPoint/functionPoint.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecordNotFoundError } from 'src/shared/errors';
import {
  ICreateFunctionPointDATA,
  IUpdateFunctionPointDATA,
} from '@entities/functionPoint/functionPoint.interface';

@Injectable()
export default class FunctionPointDAO {
  constructor(
    @InjectRepository(FunctionPointEntity)
    private functionPointRepository: Repository<FunctionPointEntity>,
  ) {}

  public async getFunctionPointRecord(functionPointID: number) {
    const functionPointEntity = await this.functionPointRepository.findOne({
      where: { functionPointID },
    });

    if (functionPointEntity === null)
      throw new RecordNotFoundError(
        `FunctionPoint record with id ${functionPointID} is not found`,
      );

    return functionPointEntity;
  }

  public async createFunctionPointRecord(data: ICreateFunctionPointDATA) {
    const newFunctionPointEntity = this.functionPointRepository.save(data);

    return newFunctionPointEntity;
  }

  public async updateFunctionpointRecord(
    functionPointID: number,
    data: IUpdateFunctionPointDATA,
  ) {
    await this.getFunctionPointRecord(functionPointID);

    const updatedRecord = await this.functionPointRepository.save({
      ...data,
      functionPointID,
    });

    return updatedRecord;
  }

  public async deleteFunctionPointRecord(functionPonitID: number) {
    await this.getFunctionPointRecord(functionPonitID);
    await this.functionPointRepository.delete(functionPonitID);
  }
}
