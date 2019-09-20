import { Component, OnInit } from '@angular/core';
import { DotControlService } from '../../dotcontrol/dotcontrol.service';

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.css']
})
export class DotsComponent implements OnInit {

  constructor(private dotControl:DotControlService) { }

  ngOnInit() {
 //   this.setDots
 //   console.log('setdots: ', this.dotControl.allDots)
  }

  handler(row:number, column:number) {
    this.dotControl.claimDot(row, column)
  }
/*
  setDots() {
    this.dotControl.allDots = [
      {row:1 ,column:1 ,owner:null },
      {row:1 ,column:2 ,owner:null },
      {row:1 ,column:3 ,owner:null },
      {row:2 ,column:1 ,owner:null },
      {row:2 ,column:2 ,owner:null },
      {row:2 ,column:3 ,owner:null },
      {row:3, column:1, owner:null },
      {row:3 ,column:2 ,owner:null },
      {row:3 ,column:3 ,owner:null }
    ]
  }  */
}
