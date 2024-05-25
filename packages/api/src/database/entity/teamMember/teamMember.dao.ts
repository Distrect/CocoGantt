import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecordNotFoundError } from 'src/shared/errors';
import { Repository } from 'typeorm';
import TeamMemberEntity from '@entities/teamMember/teamMember.entity';
import {
  ICreateTeamMemberDATA,
  IGetTeamMemberDATA,
  IUpdateTeamMemberDATA,
} from '@entities/teamMember/teamMember.interface';

@Injectable()
export default class TeamMemberDAO {
  constructor(
    @InjectRepository(TeamMemberEntity)
    private teamMemberRepository: Repository<TeamMemberEntity>,
  ) {}

  public async createTeamMemberRecord(data: ICreateTeamMemberDATA) {
    const newTeamMemberEntity = await this.teamMemberRepository.save(data);

    return newTeamMemberEntity;
  }

  public async getTeamMemberRecord(args: IGetTeamMemberDATA) {
    const TeamMemberRecord = await this.teamMemberRepository.findOne({
      where: args,
    });

    if (TeamMemberRecord === null)
      throw new RecordNotFoundError(`TeamMember record is not found`);

    return TeamMemberRecord;
  }

  public async deleteTeamMemberRecord(args: IGetTeamMemberDATA) {
    await this.getTeamMemberRecord(args);
    await this.teamMemberRepository.delete(args);
  }

  public async updateTeamMemberRecord(
    args: IGetTeamMemberDATA,
    data: IUpdateTeamMemberDATA,
  ) {
    await this.getTeamMemberRecord(args);

    const updatedTeamMemberEntity = await this.teamMemberRepository.save({
      ...data,
      ...args,
    });

    return updatedTeamMemberEntity;
  }
}
