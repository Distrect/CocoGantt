import { Module } from '@nestjs/common';
import DatabaseModule from 'src/database/database.module';
import TeamMemberFeatureService from '../teamMember/teamMember.feature.service';

@Module({
  imports: [DatabaseModule],
  providers: [TeamMemberFeatureService],
  exports: [TeamMemberFeatureService],
})
export default class TeamMemberFeatureModule {}
