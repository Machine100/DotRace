import { Component, OnInit } from '@angular/core';
import { DotcontrolService } from '../../dotcontrol/dotcontrol.service';
import { Dot } from '../../models/Dot'


@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.css']
})
export class DotsComponent implements OnInit {

  owner: string
  owners: {}

  constructor(private dotControl:DotcontrolService) { }

  ngOnInit() {
    var a = this.owners
    this.dotControl.readDatabase().subscribe(result=>{                // Event listener to changes at remote database
      console.log('from readDatabase().subscribe observable:', result)
      this.owner = result.owner
      
      //let owners = {name:'joe'}
      console.log (a)
      let key=result.id
      this.owners[key]= result.owner   // not pushing a key/value pair
      console.log(owners[key])
      
      //console.log ('key:',key)
      //this.owner[id] = result.owner
      //console.log(this.owner[id])
    })
  }

  dotClickHandler(row:number, column:number, id:string) {
    this.dotControl.claimDot(Number(row), Number(column), id, 'blue')  // HTML passes in a string but the rest of the code needs type number.
  }                                                                    // I'm not sure how to specify types at the earlier HTML layer. 
}
