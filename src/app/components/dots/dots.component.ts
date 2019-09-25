import { Component, OnInit } from '@angular/core';
import { DotcontrolService } from '../../dotcontrol/dotcontrol.service';
import { Dot } from '../../models/Dot'


@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.css']
})
export class DotsComponent implements OnInit {

  owner11: string
  owner12: string
  owner13: string
  
  constructor(private dotControl:DotcontrolService) { 
    //var owners = {test:'tesssst'}
  }

  ngOnInit() {
      this.dotControl.readDatabase().subscribe(result=>{   // Set an event listener to changes at remote database
        this.doSomeThing(result)
      })
  }

  doSomeThing (result:any) {                              // I am the remote database event listener
    console.log(result.id)
    this['owner'+result.id]=result.owner
    console.log(this['owner'+result.id])
  }

  dotClickHandler(row:number, column:number, id:string) {
    this.dotControl.claimDot(Number(row), Number(column), id, 'blue')  // HTML passes in a string but the rest of the code needs type number.
  }                                                                    // I'm not sure how to specify types at the earlier HTML layer. 
}
