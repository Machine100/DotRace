import { Component, OnInit } from '@angular/core';
import { DotcontrolService } from '../../dotcontrol/dotcontrol.service';

@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.css']
})
export class DotsComponent implements OnInit {

  constructor(private dotControl:DotcontrolService) { }

  ngOnInit() {
   this.dotControl.dot11$.subscribe(incoming=>(
     console.log(incoming)
   ))
  }

  handler(row:number, column:number, id:string) {
    this.dotControl.claimDot(row, column, id)
  }
}
