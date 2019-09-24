import { Injectable } from '@angular/core';
import { Dot } from '../models/Dot'
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DotcontrolService {

   playerColor:string
 
//  private dot11 = new BehaviorSubject <Dot> ({row:1, column:1, owner:null})     =-=-part of the MVP hack=-=-
//  dot11$ = this.dot11.asObservable()           // This shares out to the view components

  private changeStream = new BehaviorSubject <any> (this.db.collection('DotRace').doc('11').valueChanges())
  changeStream$ = this.changeStream.asObservable()
 
  constructor(private db: AngularFirestore) { }  

  readDatabase (){                                                  // No behaviorSubject middleman. 
    console.log('arrived at readdatabase')
    return this.db.collection('DotRace').doc('11').valueChanges()   // Returns observable
  }

  claimDot(row: number, column: number, id: string, owner: string) {
    //console.log ('arrived at claimDot', row, column)
    this.db.collection('DotRace').doc(id).update( {row:row} )
    this.db.collection('DotRace').doc(id).update( {column:column} )
    this.db.collection('DotRace').doc(id).update( {id:id} )
    //console.log ('playerID:', this.playerColor)
    this.db.collection('DotRace').doc(id).update( {owner: this.playerColor} )
    //console.log (typeof(row))
//    this.dot11.next({row:row, column:column, owner:this.playerColor})      =-=-MVP hack=-=-
  } 

}
