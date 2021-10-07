import { Component } from '@angular/core';
import data from './_files/data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'time-track-dashboard-angular';
  public timeList:any = data;
  filterStr: string = 'weekly';

  onFilterEvent(e: string){
    this.filterStr = e;
  }
}
