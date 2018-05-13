import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

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

  constructor(private http: HttpClient){
  }

  ngOnInit() {
    console.log("----------------- ng onInit schedule");
    this.loadSchedule(this.myScheduleName);
  }

  ngOnChanges() {
    console.log("----------------- ng onChanged schedule");
    this.loadSchedule(this.myScheduleName);
  }

  loadSchedule(myScheduleName) {
    this.http.get('http://'+environment.server_ip+':'+environment.server_port+'/'+environment.applications.time_distortion+'/schedule/' + myScheduleName).subscribe(data => {
      console.log(data);
      this.schedule = data;
      if(null != this.schedule.nexttime) {
        this.date = new Date(this.schedule.nexttime).toLocaleDateString();
        this.time = new Date(this.schedule.nexttime).toLocaleTimeString();
      }
      console.log(this.date);
      console.log(this.time);
      this.loadedSchedule = true;
    });
  }

}
