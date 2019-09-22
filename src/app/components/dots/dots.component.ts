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
   console.log (this.dotControl.readDatabase())
  }

  handler(row:number, column:number, id:string) {
    this.dotControl.claimDot(row, column, id, 'blue')
  }
}
