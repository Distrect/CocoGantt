import { Module } from '@nestjs/common';
import GanttFeatureService from './gantt.feature.service';
import GanttFeatureController from './gantt.feature.controller';
import DatabaseModule from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [GanttFeatureService],
  controllers: [GanttFeatureController],
})
export default class GanttFeatureModule {}
