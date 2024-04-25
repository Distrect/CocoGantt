import { NgModule } from '@angular/core';
import {
  EditService,
  GanttModule,
  SelectionService,
  ToolbarService,
  UndoRedoService,
  SortService,
  ResizeService,
  RowDDService,
  CriticalPathService,
} from '@syncfusion/ej2-angular-gantt';
import { CommonModule } from '@angular/common';
import { GanttChartComponent } from './ganttChart.component';
import { GantChartSettingService } from './providers/ganttChart.setting.provider';

const ganttChartServices = [
  EditService,
  ToolbarService,
  UndoRedoService,
  SelectionService,
  SortService,
  ResizeService,
  RowDDService,
  CriticalPathService,
];

const modulePorviders = [GantChartSettingService];

@NgModule({
  id: 'GanttChartModule',
  imports: [CommonModule, GanttModule],
  declarations: [GanttChartComponent],
  providers: [...ganttChartServices, ...modulePorviders],
  exports: [GanttChartComponent],
})
export default class GanttChartModule {}
