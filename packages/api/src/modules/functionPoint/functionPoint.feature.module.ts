import { Module } from '@nestjs/common';
import FunctionPointEntityModule from '@entities/functionPoint/functionPonint.entity.module';
import FunctionPointFeatureController from 'src/modules/functionPoint/functionPoint.feature.controller';
import FunctionPointFeatureService from 'src/modules/functionPoint/functionPoint.feature.service';

@Module({
  imports: [FunctionPointEntityModule],
  controllers: [FunctionPointFeatureController],
  providers: [FunctionPointFeatureService],
  exports: [FunctionPointFeatureService],
})
export default class FunctionPointFeatureModule {}
