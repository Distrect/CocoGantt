import { Controller } from '@nestjs/common';
import GanttFeatureService from './gantt.feature.service';
import { ITasChangeDTO } from './gantt.feature.interface';

@Controller('')
export default class GanttFeatureController {
  constructor(private ganttFeatureService: GanttFeatureService) {}

  public async applyChanges(data: ITasChangeDTO[]) {
    return await this.ganttFeatureService.applyChanges(data);
  }
}
