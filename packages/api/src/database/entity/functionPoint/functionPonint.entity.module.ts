import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import FunctionPointDAO from '@entities/functionPoint/functionPoint.dao';
import FunctionPointEntity from '@entities/functionPoint/functionPoint.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FunctionPointEntity])],
  providers: [FunctionPointDAO],
  exports: [FunctionPointDAO],
})
export default class FunctionPointEntityModule {}
