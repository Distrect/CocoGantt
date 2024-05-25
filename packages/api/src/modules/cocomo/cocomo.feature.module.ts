import { Module } from '@nestjs/common';
import DatabaseModule from 'src/database/database.module';
import CocomoFeatureService from '../cocomo/cocomo.feature.service';

@Module({
  imports: [DatabaseModule],
  providers: [CocomoFeatureService],
  exports: [CocomoFeatureService],
})
export default class CocomoFeatureModule {}
