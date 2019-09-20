import { Injectable } from '@angular/core';
import { Dot } from '../models/Dot'
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DotcontrolService {

  private dot11 = new BehaviorSubject <Dot> ({row:1, column:1, owner:null})
  dot11$ = this.dot11.asObservable()           // This shares out to the view components

  constructor(private db: AngularFirestore) { }

  claimDot(row: number, column: number, id: string) {
    console.log (row, column)
 //   this.db.collection('DotRace').doc(id).update( {[id]:id} )
  } 

}
