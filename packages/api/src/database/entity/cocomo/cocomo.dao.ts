import CocomoEntity from '@entities/cocomo/cocomo.entity';
import {
  ICreateCocomoDATA,
  IGetCocomoDATA,
  IUpdateCocomoDATA,
} from '@entities/cocomo/cocomo.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecordNotFoundError } from 'src/shared/errors';
import { Repository } from 'typeorm';

@Injectable()
export default class CocomoDAO {
  constructor(
    @InjectRepository(CocomoEntity)
    private cocomoRepository: Repository<CocomoEntity>,
  ) {}

  public async createCocomoRecord(data: ICreateCocomoDATA) {
    const newCocomoEntity = await this.cocomoRepository.save(data);

    return newCocomoEntity;
  }

  public async getCocomoRecord(args: IGetCocomoDATA) {
    const cocomoRecord = await this.cocomoRepository.findOne({ where: args });

    if (cocomoRecord === null)
      throw new RecordNotFoundError(`Cocomo record is not found`);

    return cocomoRecord;
  }

  public async deleteCocomoRecord(args: IGetCocomoDATA) {
    await this.getCocomoRecord(args);
    await this.cocomoRepository.delete(args);
  }

  public async updateCocomoRecord(
    args: IGetCocomoDATA,
    data: IUpdateCocomoDATA,
  ) {
    await this.getCocomoRecord(args);

    const updatedCocomoEntity = await this.cocomoRepository.save({
      ...data,
      ...args,
    });

    return updatedCocomoEntity;
  }
}
