import { Injectable } from '@angular/core';
import { Dot } from '../models/Dot'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DotControlService {


  private dot11 = new BehaviorSubject <Dot> ({row:1, column:1, owner:null})
  dot11$ = this.dot11.asObservable()

  constructor() { }

  claimDot(row: number, column: number) {
    console.log (row, column) 
  } 
  
  reportDots() {
    console.log ('dots:',this.dot)
  }

}
