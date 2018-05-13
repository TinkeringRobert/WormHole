import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TimeDistortionModule } from '../../controllers/time-distortion/time-distortion.module'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, OnChanges {
  @Input("sName") myScheduleName: String;
  loadedSchedule = false
  schedule;
  date = null;
  time = null;

  constructor(private http: HttpClient,
              private timeDistortionModule: TimeDistortionModule){
  }

  ngOnInit() {
    this.loadSchedule(this.myScheduleName);
  }

  ngOnChanges() {
    this.loadSchedule(this.myScheduleName);
  }

  loadSchedule(myScheduleName) {
    this.timeDistortionModule.getSchedule(myScheduleName, data => {
      this.schedule = data;
      if(null != this.schedule.nexttime) {
        this.date = new Date(this.schedule.nexttime).toLocaleDateString();
        this.time = new Date(this.schedule.nexttime).toLocaleTimeString();
      }
      this.loadedSchedule = true;
    });
  }

}
