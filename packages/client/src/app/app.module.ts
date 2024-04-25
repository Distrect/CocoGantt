import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import GanttChartModule from '../modules/gantt/ganttChart.module';
import { ClientInfoService } from '../service/clientInfoService/clientInfo.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GanttChartModule],
  providers: [ClientInfoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
