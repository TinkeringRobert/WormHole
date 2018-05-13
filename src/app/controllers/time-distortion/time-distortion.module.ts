import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class TimeDistortionModule {
  prodRunning;

  constructor(private http: HttpClient){
    this.prodRunning = environment.production;
  };

  public getSchedule(schedule, callback) {
    this.http.get('http://'+environment.server_ip+':'+environment.server_port+'/'+environment.applications.time_distortion+'/schedule/' + schedule).subscribe(data => {
      return callback(data);
    });
  };

  public getActions(callback) {
    this.http.get('http://'+environment.server_ip+':'+environment.server_port+'/'+environment.applications.time_distortion+'/actions').subscribe(data => {
      return callback(data);
    });
  };

  public setAction(action, state, callback) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    this.http.post('http://'+environment.server_ip+':'+environment.server_port+'/'+environment.applications.time_distortion+'/action/'+action+'/'+state, null, httpOptions).subscribe(data => {
      callback();
    });
  }
}
