import { Injectable } from '@nestjs/common';
import CocomoDAO from '@entities/cocomo/cocomo.dao';
import {
  ICreateCocomoDATA,
  IGetCocomoDATA,
  IUpdateCocomoDATA,
} from '@entities/cocomo/cocomo.interface';

@Injectable()
export default class CocomoFeatureService {
  constructor(private cocomoDAO: CocomoDAO) {}

  public async getCocomo(args: IGetCocomoDATA) {
    return await this.cocomoDAO.getCocomoRecord(args);
  }

  public async createCocomo(data: ICreateCocomoDATA) {
    return await this.cocomoDAO.createCocomoRecord(data);
  }

  public async deleteCocomo(args: IGetCocomoDATA) {
    await this.cocomoDAO.deleteCocomoRecord(args);
  }

  public async updateCocomo(args: IGetCocomoDATA, data: IUpdateCocomoDATA) {
    return await this.cocomoDAO.updateCocomoRecord(args, data);
  }
}
