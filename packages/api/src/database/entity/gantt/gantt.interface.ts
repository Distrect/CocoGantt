import ProjectEntity from '@entities/project/project.entity';

export type IGetGanttDATA =
  | {
      ganttID: number;
    }
  | {
      project: {
        projectID: number;
      };
    }
  | {
      ganttID: number;
      project: {
        projectID: number;
      };
    };
