import { Component, OnInit } from '@angular/core';
import { DotcontrolService } from '../../dotcontrol/dotcontrol.service';


@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.css']
})
export class DotsComponent implements OnInit {

  owner: string

  constructor(private dotControl:DotcontrolService) { }

  ngOnInit() {
    this.dotControl.dot11$.subscribe(data=>{       // Subscribe to a stream of changes to the state
      console.log ('fromdotControl:', data)        // of the buttons as they come back from database changes.
      this.owner = data.owner
      console.log('csslocalvarset',this.owner)
    })
  }

  handler(row:number, column:number, id:string) {
    console.log ('arrived at handler', typeof(row))
    this.dotControl.claimDot(Number(row), Number(column), id, 'blue')  // HTML passes in a string but the rest of the code needs type number.
  }                                                                    // I'm not sure how to specify types at the earlier HTML layer. 
}
