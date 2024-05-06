import { Injectable } from '@angular/core';
import {
  AddDialogFieldSettingsModel,
  ColumnModel,
  EditDialogFieldSettingsModel,
  EditSettingsModel,
  GanttComponent,
  SplitterSettingsModel,
  TimelineSettingsModel,
  ToolbarItem,
  TooltipSettingsModel,
} from '@syncfusion/ej2-angular-gantt';

export interface IValidateFieldArgs {
  element: HTMLElement;
  value: string;
}

@Injectable()
export class GantChartSettingService {
  private ganttChartComponent?: GanttComponent;

  public readonly columns: ColumnModel[] = [
    {
      field: 'TaskID',
      headerText: 'Task ID',
      textAlign: 'Center',
      width: '100px',
    },
    {
      field: 'TaskName',
      headerText: 'Task Name',
      width: '100px',
      textAlign: 'Left',
    },
    {
      field: 'StartDate',
      headerText: 'Start Date',
      width: '100px',
      textAlign: 'Center',
    },
    {
      field: 'EndDate',
      headerText: 'End Date',
      width: '100px',
      textAlign: 'Center',
    },
    {
      field: 'Duration',
      headerText: 'Duration',
      width: '100px',
      textAlign: 'Center',
    },
    {
      field: 'Progress',
      headerText: 'Progress',
      width: '100px',
      textAlign: 'Center',
    },
    {
      field: 'isManual',
      headerText: 'Scheduling Mode',
      width: '100px',
      textAlign: 'Center',
    },
    {
      field: 'optimisticTime',
      headerText: 'Optimistic Time',
      width: '100px',
      type: 'number',
      textAlign: 'Center',
      validationRules: {
        required: true,
        custom: [
          this.validateOptimisticField,
          'Optimistic time should be number',
        ],
      },
    },
    {
      field: 'pessimisticTime',
      headerText: 'Pessimistic Time',
      width: '100px',
      type: 'number',
      textAlign: 'Center',
      validationRules: {
        required: true,
        custom: [
          this.validateOptimisticField,
          'Pessimistic time should be number',
        ],
      },
    },
    {
      field: 'mostLikely',
      headerText: 'Most Likely',
      width: '100px',
      type: 'number',
      textAlign: 'Center',
      validationRules: {
        required: true,
        custom: [
          this.validateOptimisticField,
          'Most Likely time should be number',
        ],
      },
    },
    {
      field: 'successProbability',
      headerText: 'Success Probability',
      width: '100px',
      type: 'number',
      textAlign: 'Center',
      validationRules: {
        required: true,
        custom: [
          this.validateSuccessProbabilityField,
          'Success Probability should be a number and between 0 and 100',
        ],
      },
    },
  ];

  public readonly taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    durationUnit: 'DurationUnit',
    parentID: 'parentID',
    milestone: 'milestone',
    child: 'subtasks',
    optimisticTime: 'optimisticTime',
    pessimisticTime: 'pessimisticTime',
    mostLikely: 'mostLikely',
    manual: 'isManual',
  };

  public readonly toolbarItems: ToolbarItem[] = [
    'Add',
    'Edit',
    'Delete',
    'Update',
    'ExpandAll',
    'CollapseAll',
    'Undo',
    'Redo',
    'Indent',
    'Outdent',
    'CriticalPath',
    'ZoomIn',
    'ZoomOut',
  ];

  public readonly editSettings: EditSettingsModel = {
    allowAdding: true,
    allowDeleting: true,
    allowEditing: true,
    allowNextRowEdit: true,
    showDeleteConfirmDialog: true,
    allowTaskbarEditing: true,
    mode: 'Dialog',
  };

  public readonly timelineSettings: TimelineSettingsModel = {
    showTooltip: true,
    timelineViewMode: 'Week',
    topTier: {
      unit: 'Week',
    },
    bottomTier: {
      unit: 'Hour',
    },
  };

  public readonly splitterSettings: SplitterSettingsModel = {
    view: 'Chart',
  };

  public readonly addDialogFields: AddDialogFieldSettingsModel[] = [
    { type: 'General' },
    { type: 'Dependency' },
    {
      type: 'Custom',
      headerText: 'PERT',
      fields: ['optimisticTime', 'pessimisticTime', 'mostLikely'],
    },
  ];

  public readonly tooltipSettings: TooltipSettingsModel = {
    showTooltip: true,
  };

  public readonly editDialogFields: EditDialogFieldSettingsModel[] = [
    ...this.addDialogFields,
  ];

  public taskMode: 'Auto' | 'Manual' | 'Custom' = 'Custom';

  public readonly dayWorkingTime: { from: number; to: number } = {
    from: 8,
    to: 19,
  };

  public readonly workWeek: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
  ];

  private refreshGanttChart() {
    if (this.ganttChartComponent === undefined)
      throw new RecordNotFoundError('Gantt Component not initialized');

    this.ganttChartComponent.refresh();
  }

  public validateOptimisticField(args: IValidateFieldArgs): boolean {
    const val = parseFloat(args.value);

    console.log('Vla', val);

    if (!/^\d+$/.test(args.value)) return false;

    return true;
  }

  public validateSuccessProbabilityField(args: IValidateFieldArgs): boolean {
    if (this.validateOptimisticField(args) === false) return false;

    const val = parseFloat(args.value);

    if (val < 0 || val > 100) return false;

    return true;
  }

  public changeTaskMode() {
    const taskModes: ['Auto', 'Manual', 'Custom'] = [
      'Auto',
      'Manual',
      'Custom',
    ];

    const index = taskModes.indexOf(this.taskMode) + 1;
    const left = index % 3 ? index + 1 : 1;
    let x = taskModes[left - 1];
    this.taskMode = taskModes[left - 1];
    this.refreshGanttChart();

    console.log(this.taskMode);
  }

  set ganttComponent(comp: GanttComponent) {
    this.ganttChartComponent = comp;
  }
}
