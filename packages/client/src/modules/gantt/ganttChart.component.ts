import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GantChartSettingService } from './providers/ganttChart.setting.provider';
import { ClientInfoService } from '../../service/clientInfoService/clientInfo.service';
import {
  GanttComponent,
  ActionBeginArgs,
  IQueryTaskbarInfoEventArgs,
  ActionCompleteArgs,
  RowSelectEventArgs,
} from '@syncfusion/ej2-angular-gantt';
import { setCulture } from '@syncfusion/ej2-base';

const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2020'),
    subtasks: [
      {
        TaskID: 2,
        TaskName: 'Identify Site location',
        StartDate: new Date('04/02/2019'),
        Duration: 4,
        Progress: 50,
        optimisticTime: 2,
      },
      {
        TaskID: 3,
        TaskName: 'Perform Soil test',
        StartDate: new Date('04/02/2019'),
        Duration: 4,
        Progress: 50,
        optimisticTime: 2,
      },
      {
        TaskID: 4,
        TaskName: 'Soil test approval',
        StartDate: new Date('04/02/2019'),
        Duration: 4,
        Progress: 50,
        optimisticTime: 2,
      },
    ],
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
    subtasks: [
      {
        TaskID: 6,
        TaskName: 'Develop floor plan for estimation',
        StartDate: new Date('04/04/2019'),
        Duration: 3,
        Progress: 50,
        optimisticTime: 2,
      },
      {
        TaskID: 7,
        TaskName: 'List materials',
        StartDate: new Date('04/04/2019'),
        Duration: 3,
        Progress: 50,
        optimisticTime: 2,
      },
      {
        TaskID: 8,
        TaskName: 'Estimation approval',
        StartDate: new Date('04/04/2019'),
        Duration: 3,
        Progress: 50,
        optimisticTime: 2,
      },
    ],
  },
];

const flatData = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2020'),
  },
  {
    TaskID: 2,
    TaskName: 'Identify Site location',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    optimisticTime: 2,
    parentID: 1,
    isManual: true,
  },
  {
    TaskID: 3,
    TaskName: 'Perform Soil test',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    optimisticTime: 2,
    Predecessor: '2FS',
    parentID: 1,
    isManual: false,
  },
  {
    TaskID: 4,
    TaskName: 'Soil test approval',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    optimisticTime: 2,
    parentID: 1,
    isManual: true,
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 6,
    TaskName: 'Develop floor plan for estimation',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    optimisticTime: 2,
    parentID: 5,
    isManual: false,
  },
  {
    TaskID: 7,
    TaskName: 'List materials',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    optimisticTime: 2,
    parentID: 5,
    isManual: true,
  },
  {
    TaskID: 8,
    TaskName: 'Estimation approval',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    optimisticTime: 2,
    parentID: 5,
    isManual: false,
  },
];

@Component({
  providers: [],
  selector: 'gantt',
  templateUrl: './ganttChart.component.html',
  styleUrl: './ganttChart.component.style.css',
})
export class GanttChartComponent implements OnInit, AfterViewInit {
  @ViewChild('ganttChart') private ganttChart?: GanttComponent;
  public data = flatData;

  constructor(
    public readonly ganttChartSettings: GantChartSettingService,
    private clientInfoService: ClientInfoService
  ) {}
  public ngOnInit(): void {
    this.configureGanttChart();
  }

  public ngAfterViewInit(): void {
    this.ganttChartSettings.ganttComponent = this.ganttChart as GanttComponent;
  }

  public configureGanttChart() {
    setCulture('tr-TR');
  }

  public actionBegin(eventArgs: ActionBeginArgs) {
    const { requestType, action } = eventArgs;
    console.log(`[Request Type]:`, requestType, `[Action]:`, action);

    if (action === 'indenting' || action === 'outdenting') {
      console.log(`[Event Args]:`, eventArgs);
    }

    if (requestType === 'ValidateDependency') {
      console.log(`[Event Args]:`, eventArgs);
    }
  }

  public actionComplete(eventArgs: ActionCompleteArgs) {}

  public queryTaskbarInfo(eventArgs: IQueryTaskbarInfoEventArgs) {
    //console.log(`[Query Taskbar Info Event Args]:`, eventArgs);
  }

  public getUndoCollection() {
    if (this.ganttChart === undefined) return;

    const undoColleection = this.ganttChart.getUndoActions();
  }

  public getRedoCollection() {
    if (this.ganttChart === undefined) return;

    const redoColleection = this.ganttChart.getRedoActions();
  }

  public clearUndoCollection() {
    if (this.ganttChart === undefined) return;

    this.ganttChart.clearUndoCollection();
  }

  public clearRedoCollection() {
    if (this.ganttChart === undefined) return;

    this.ganttChart.getRedoActions();
  }

  public selectRow(eventArgs: RowSelectEventArgs) {
    console.log(`[Event Args]:`, eventArgs);
  }
}

// const actionBegin = ({
//   action,
//   cancel,
//   data,
//   fromItem,
//   isValidLink,
//   mergeSegmentIndexes,
//   modifiedRecords,
//   modifiedTaskData,
//   name,
//   newPredecessorString,
//   newTaskData,
//   predecessor,
//   recordIndex,
//   requestType,
//   rowData,
//   splitDate,
//   target,
//   toItem,
//   type,
// }: ActionBeginArgs) {
//   console.log(
//     'action:',
//     action,
//     'cancel:',
//     cancel,
//     'data:',
//     data,
//     'fromItem:',
//     fromItem,
//     'isValidLink:',
//     isValidLink,
//     'mergeSegmentIndexes:',
//     mergeSegmentIndexes,
//     'modifiedRecords:',
//     modifiedRecords,
//     'modifiedTaskData:',
//     modifiedTaskData,
//     'name:',
//     name,
//     'newPredecessorString:',
//     newPredecessorString,
//     'newTaskData:',
//     newTaskData,
//     'predecessor:',
//     predecessor,
//     'recordIndex:',
//     recordIndex,
//     'requestType:',
//     requestType,
//     'rowData:',
//     rowData,
//     'splitDate:',
//     splitDate,
//     'target:',
//     target,
//     'toItem:',
//     toItem,
//     'type:',
//     type
//   );
// }
