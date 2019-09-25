import { Injectable } from '@angular/core';
import { Dot } from '../models/Dot'
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DotcontrolService {

   playerColor:string
 
  constructor(private db: AngularFirestore) { }  

  readDatabase (){                                         // No behaviorSubject middleman. 
    console.log('arrived at readdatabase')                 // This shares from firestore back to dots.component to update color
    return this.db.collection('DotRace').doc().valueChanges()   // Is only called once - from OnInit at dots.component
  }

  claimDot(row: number, column: number, id: string, owner: string) {
    //console.log ('arrived at claimDot', row, column)
    this.db.collection('DotRace').doc(id).update( {row:row} )
    this.db.collection('DotRace').doc(id).update( {column:column} )
    this.db.collection('DotRace').doc(id).update( {id:id} )
    //console.log ('playerID:', this.playerColor)
    this.db.collection('DotRace').doc(id).update( {owner: this.playerColor} )
  } 

}
