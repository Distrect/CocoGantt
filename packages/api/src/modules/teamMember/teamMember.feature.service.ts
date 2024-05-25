import TeamMemberDAO from '@entities/teamMember/teamMember.dao';
import {
  ICreateTeamMemberDATA,
  IGetTeamMemberDATA,
  IUpdateTeamMemberDATA,
} from '@entities/teamMember/teamMember.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class TeamMemberFeatureService {
  constructor(private teamMemberDAO: TeamMemberDAO) {}

  public async getTeamMember(args: IGetTeamMemberDATA) {
    return await this.teamMemberDAO.getTeamMemberRecord(args);
  }

  public async createTeamMember(data: ICreateTeamMemberDATA) {
    return await this.teamMemberDAO.createTeamMemberRecord(data);
  }

  public async deleteTeamMember(args: IGetTeamMemberDATA) {
    await this.teamMemberDAO.deleteTeamMemberRecord(args);
  }

  public async updateTeamMember(
    args: IGetTeamMemberDATA,
    data: IUpdateTeamMemberDATA,
  ) {
    return await this.teamMemberDAO.updateTeamMemberRecord(args, data);
  }
}
