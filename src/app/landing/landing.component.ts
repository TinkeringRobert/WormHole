import { Component, OnInit } from '@angular/core';
import { ViewChild } from "@angular/core";
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  rectW:number = 100;
  rectH:number = 100;
  rectColor:string = "#FF0000";
  context:CanvasRenderingContext2D;

  @ViewChild("myCanvas") myCanvas;

  //public constructor(private titleService: Title ) { }
  rect = [];
  ctx;
  width = 400;
  height = 400;
  constructor() { }

  ngOnInit() {
    // let canvas = this.myCanvas.nativeElement;
    // this.context = canvas.getContext("2d");
    // this.ctx = this.context;
    // this.draw();
  }

  draw() {
    for(var i = 0; i < 2; i++)
    {

      var x = Math.random() * this.width - 50;
      var y = Math.random() * this.height - 50;
      if( x < 0 ) { x = 0; }
      if( y < 0 ) { y = 0; }
      x = Math.round(x);
      y = Math.round(y);
      var newRect = {x:x,y:y,width:50,height:50};
      console.log("Rect " + x + " " + y);
      var overlap = false;
      for(var Ri = 0; Ri < this.rect.length; Ri++)
      {
        if(rectOverlap(newRect,this.rect[Ri])){
          overlap = true;
        }
      }
      if(overlap == false) {
        this.rect.push({x:x,y:y,width:50,height:50});

        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);

        //ctx.fillStyle='rgb('+r+','+g+','+b+')';
        //ctx.fillRect(x, y, 50, 50) // x, y, width, height

        this.ctx.fillStyle='rgb('+r+','+g+','+b+')';
        this.ctx.beginPath();
        this.ctx.moveTo(x + 0, y + 25);
        this.ctx.lineTo(x + 20, y + 20);
        this.ctx.lineTo(x + 25, y + 0);
        this.ctx.lineTo(x + 30, y + 20);
        this.ctx.lineTo(x + 50, y + 25);
        this.ctx.lineTo(x + 30, y + 30);
        this.ctx.lineTo(x + 25, y + 50);
        this.ctx.lineTo(x + 20, y + 30);
        this.ctx.closePath();
        this.ctx.fill();


      } else {
        i--;
      }
    }
    console.log(this.rect);
    // we will clip one rectangle with the other
    //ctx.clip();
    //this.ctx.rect(0, 0, 100, 100)
    this.ctx.drawImage("favicon.png", 0, 0,50,50);
    this.ctx.stroke();
  }
}


function valueInRange(value, min, max)
{
  return (value >= min) && (value <= max);
}

function rectOverlap(A, B)
{
  var xOverlap = valueInRange(A.x, B.x, B.x + B.width) ||
           valueInRange(B.x, A.x, A.x + A.width);

  var yOverlap = valueInRange(A.y, B.y, B.y + B.height) ||
           valueInRange(B.y, A.y, A.y + A.height);

  return xOverlap && yOverlap;
}
