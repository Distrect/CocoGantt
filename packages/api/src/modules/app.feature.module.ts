import { Module } from '@nestjs/common';
import CocomoFeatureModule from './cocomo/cocomo.feature.module';
import TeamMemberFeatureModule from './teamMember/teamMember.feature.module';
import FunctionPointFeatureModule from './functionPoint/functionPoint.feature.module';

const appFeatureModules = [
  FunctionPointFeatureModule,
  CocomoFeatureModule,
  TeamMemberFeatureModule,
];

@Module({
  imports: appFeatureModules,
  exports: appFeatureModules,
})
export default class AppFEatureModule {}
