import { Injectable } from '@nestjs/common';
import FunctionPointDAO from '@entities/functionPoint/functionPoint.dao';
import {
  ICreateFunctionPointDATA,
  IUpdateFunctionPointDATA,
} from '@entities/functionPoint/functionPoint.interface';

@Injectable()
export default class FunctionPointFeatureService {
  constructor(private functionPointDAO: FunctionPointDAO) {}

  public async createFunctionPoint(data: ICreateFunctionPointDATA) {
    const newFunctionPoint =
      await this.functionPointDAO.createFunctionPointRecord(data);

    return newFunctionPoint.toJSON();
  }

  public async getFunctionPoint(functionPointID: number) {
    return await this.functionPointDAO.getFunctionPointRecord(functionPointID);
  }

  public async updateFunctionPoint(
    functionPointID: number,
    data: IUpdateFunctionPointDATA,
  ) {
    return await this.functionPointDAO.updateFunctionpointRecord(
      functionPointID,
      data,
    );
  }

  public async deleteFunctionPoint(functionPointID: number) {
    await this.functionPointDAO.deleteFunctionPointRecord(functionPointID);
  }
}
