import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-distortion',
  templateUrl: './time-distortion.component.html',
  styleUrls: ['./time-distortion.component.css']
})
export class TimeDistortionComponent implements OnInit {

  scheduleName = null;
  constructor() { }

  ngOnInit() {
    //console.log("load TimeDistortionComponent");
  }

  setScheduleName(scheduleName) {
    this.scheduleName = scheduleName;
    //console.log('TD set schedule name to ' + scheduleName);
  }
}
