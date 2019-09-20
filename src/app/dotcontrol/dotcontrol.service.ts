import { Injectable } from '@angular/core';
import { Dot } from '../models/Dot'

@Injectable({
  providedIn: 'root'
})
export class DotControlService {


  dot: Dot
  allDots: Dot[]
  // dotarray: DotArray

  //share out observables

  constructor() { }

  claimDot(row: number, column: number) {
    console.log (row, column) 
    

    const allDots:Dot[] = [                             // This is a mock. to test this function
      {uid:'11',row:1 ,column:1 ,owner:null },                   // Remove it later to werever it is supposed to go.
      {uid:'12',row:1 ,column:2 ,owner:null },
      {uid:'13',row:1 ,column:3 ,owner:null },
      {uid:'21',row:2 ,column:1 ,owner:null },
      {uid:'22',row:2 ,column:2 ,owner:null },
      {uid:'23',row:2 ,column:3 ,owner:null },
      {uid:'31',row:3, column:1, owner:null },
      {uid:'32',row:3 ,column:2 ,owner:null },
      {uid:'33',row:3 ,column:3 ,owner:null }
    ]

    const result:Dot[] = allDots
      .filter(v=>v.row==row)
      .filter(v=>v.column==column)
    console.log (result)
    
    //set local state
    //set remote state
    }
  
  reportDots() {
    console.log ('dots:',this.dot)
  }

}
