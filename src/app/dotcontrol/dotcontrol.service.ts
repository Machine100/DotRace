import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DotcontrolService {

  playerColor: string
 
  constructor(private db: AngularFirestore) { }   // Incoming
    // These pass changes from firestore back to the view components
    readDatabase11 (){ return this.db.collection('DotRace').doc('11').valueChanges()}                                     // No behaviorSubject middleman. 
    readDatabase12 (){ return this.db.collection('DotRace').doc('12').valueChanges()} 
    readDatabase13 (){ return this.db.collection('DotRace').doc('13').valueChanges()} 
    readDatabase21 (){ return this.db.collection('DotRace').doc('21').valueChanges()}                                     // No behaviorSubject middleman. 
    readDatabase22 (){ return this.db.collection('DotRace').doc('22').valueChanges()} 
    readDatabase23 (){ return this.db.collection('DotRace').doc('23').valueChanges()} 
    readDatabase31 (){ return this.db.collection('DotRace').doc('31').valueChanges()}                                     // No behaviorSubject middleman. 
    readDatabase32 (){ return this.db.collection('DotRace').doc('32').valueChanges()} 
    readDatabase33 (){ return this.db.collection('DotRace').doc('33').valueChanges()}
    readDatabase41 (){ return this.db.collection('DotRace').doc('41').valueChanges()}                                     // No behaviorSubject middleman. 
    readDatabase42 (){ return this.db.collection('DotRace').doc('42').valueChanges()} 
    readDatabase43 (){ return this.db.collection('DotRace').doc('43').valueChanges()} 
    readDatabase51 (){ return this.db.collection('DotRace').doc('51').valueChanges()}                                     // No behaviorSubject middleman. 
    readDatabase52 (){ return this.db.collection('DotRace').doc('52').valueChanges()} 
    readDatabase53 (){ return this.db.collection('DotRace').doc('53').valueChanges()} 
    readDatabase61 (){ return this.db.collection('DotRace').doc('61').valueChanges()}                                     // No behaviorSubject middleman. 
    readDatabase62 (){ return this.db.collection('DotRace').doc('62').valueChanges()} 
    readDatabase63 (){ return this.db.collection('DotRace').doc('63').valueChanges()}
    redScore       (){ return this.db.collection('DotRace').doc('redScore').valueChanges()}
    blueScore      (){ return this.db.collection('DotRace').doc('blueScore').valueChanges()}

  claimDot( id: string) {
    this.db.collection('DotRace').doc(id).update( {owner: this.playerColor} )
    this.changeScore ()
  } 

  changeScore () {
    
  }

  resetBoard() {
    this.db.collection('DotRace').doc('blueScore').update( {score: 0} )
    this.db.collection('DotRace').doc('redScore').update( {score: 0} )
    this.playerColor = 'lightyellow'
    let ids: string[] = ['11','12','13','21','22','23','31','32','33','41','42','43','51','52','53','61','62','63']
    ids.forEach(id=>(
      this.db.collection('DotRace').doc(id).update( {owner: 'lightyellow'} )
    ))
  }
}
