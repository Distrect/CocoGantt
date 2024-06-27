import { Module } from '@nestjs/common';
import GanttDAO from '@entities/gantt/gantt.dao';
import { TypeOrmModule } from '@nestjs/typeorm';
import GanttEntity from '@entities/gantt/gant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GanttEntity])],
  providers: [GanttDAO],
  exports: [GanttDAO],
})
export default class GanttEntityModule {}
