import TeamMemberEntity from '@entities/teamMember/teamMember.entity';

export type ICreateTeamMemberDATA = {
  memberName: string;
  title: string;
  project?: {
    projectID: number;
  };
};

export type IGetTeamMemberDATA =
  | { teamMemberID: number }
  | { project: { projectID: number } }
  | ({ teamMemberID: number } & { project: { projectID: number } });

export type IUpdateTeamMemberDATA = Partial<
  Omit<TeamMemberEntity, 'teamMemberID' | 'title'>
>;
