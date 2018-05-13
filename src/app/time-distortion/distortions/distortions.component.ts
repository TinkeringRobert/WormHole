import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http'
import { TimeDistortionModule } from '../../controllers/time-distortion/time-distortion.module'

@Component({
  selector: 'app-distortions',
  templateUrl: './distortions.component.html',
  styleUrls: ['./distortions.component.css']
})

export class DistortionsComponent implements OnInit {
  //TimeDistortionModule timeDistortionModule;

  @Output() onLoadSchedule: EventEmitter<any> = new EventEmitter<any>();
  loadedSchedules = false;
  schedules = [];
  reloadInt = null;
  serverIp = "";
  prodRunning = environment.production;

  constructor(private http: HttpClient,
              private timeDistortionModule: TimeDistortionModule){
  }

  ngOnInit() {
    //console.log(environment);
    this.loadSchedules();

    this.reloadInt = setInterval(() => {
      this.reloadSchedules();
    }, 1000 * 3);
  }

  ngOnDestroy(): void {
    //console.log('Leave Distortions');
    clearInterval(this.reloadInt);
  }

  loadSchedule(name) {
    //console.log("Show details for " + name);
    this.onLoadSchedule.emit(name);
  }

  finishTask(schedule) {
    schedule.state = '2';
    this.timeDistortionModule.setAction(schedule.name, schedule.state, data => {
      this.reloadSchedules();
    });
  }

  loadSchedules() {
    this.serverIp = environment.server_ip;
    this.timeDistortionModule.getActions(data => {
      for (var i = 0, len = (<any>data).length; i < len; i++) {
        var schedule = data[i];
        this.updateState(schedule);
        this.schedules.push(schedule);
      };
      this.loadedSchedules = true;
    });
  }

  reloadSchedules() {
      this.timeDistortionModule.getActions(data => {
      for (var i = 0, len = (<any>data).length; i < len; i++) {
        var schedule = data[i];
        for(var sIndex = 0; sIndex < this.schedules.length; sIndex++){
          if(this.schedules[sIndex].name == schedule.name) {
            this.schedules[sIndex].state = schedule.state;
            this.updateState(this.schedules[sIndex]);
          }
        }
      }
    });
  }

  updateState(schedule) {
    switch(schedule.state) {
      case '1':
        schedule.stateName = 'Pending'
      break;
      case '2':
        schedule.stateName = 'Finished'
      break;
      default:
      case '3':
        schedule.stateName = 'Unknown'
      break;
    }
  }

  getColor(schedule) {
    return 'rgb('+
            schedule.color.red + ',' +
            schedule.color.green + ',' +
            schedule.color.blue + ')';
  }
}
