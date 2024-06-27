import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import TaskDAO from '@entities/task/task.dao';
import TaskEntity from '@entities/task/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  providers: [TaskDAO],
  exports: [TaskDAO],
})
export default class TaskEntityModule {}
