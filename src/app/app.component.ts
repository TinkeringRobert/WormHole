import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { ViewChild } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  public constructor(private titleService: Title ) { }
  title = "Worm-hole"
  ngOnInit() {
    var newTitle = "Step into the Wormhole";

    console.log("load AppComponent");
    this.titleService.setTitle( newTitle );

    //window.onload = this.draw;
  }
}
