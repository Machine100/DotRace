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

  constructor(private db: AngularFirestore) { }     // error in here   <---------------

  readDatabase () {
    console.log ('arrved at readDatabase')
    return this.db.collection('DotRace').doc('11').valueChanges()   // returns observable
  }

  claimDot(row: number, column: number, id: string, owner: string) {
    console.log ('arrived at claimDot', row, column)
    this.db.collection('DotRace').doc(id).update( {row:row} )
    this.db.collection('DotRace').doc(id).update( {column:column} )
    this.db.collection('DotRace').doc(id).update( {id:id} )
    this.db.collection('DotRace').doc(id).update( {owner:owner} )
    console.log (typeof(row))
    this.dot11.next({row:row, column:column, owner:owner})
  } 

}
