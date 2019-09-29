import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DotcontrolService {

  playerColor: string
  localStateBlueScore: number
  localStateRedScore: number
 
  constructor(private db: AngularFirestore) { }   // Incoming
    // These pass changes from firestore back to the view components
    readDatabase11 (){ return this.db.collection('DotRace').doc('11').valueChanges() } 
    readDatabase12 (){ return this.db.collection('DotRace').doc('12').valueChanges() } 
    readDatabase13 (){ return this.db.collection('DotRace').doc('13').valueChanges() } // These are individual listeners to 
    readDatabase21 (){ return this.db.collection('DotRace').doc('21').valueChanges() } // desired incoming streams.
    readDatabase22 (){ return this.db.collection('DotRace').doc('22').valueChanges() } 
    readDatabase23 (){ return this.db.collection('DotRace').doc('23').valueChanges() } // each one can be subscribed to
    readDatabase31 (){ return this.db.collection('DotRace').doc('31').valueChanges() } // by view components (currently only 2:
    readDatabase32 (){ return this.db.collection('DotRace').doc('32').valueChanges() } // Dots and  and Controlpanel
    readDatabase33 (){ return this.db.collection('DotRace').doc('33').valueChanges() }
    readDatabase41 (){ return this.db.collection('DotRace').doc('41').valueChanges() } 
    readDatabase42 (){ return this.db.collection('DotRace').doc('42').valueChanges() } 
    readDatabase43 (){ return this.db.collection('DotRace').doc('43').valueChanges() } 
    readDatabase51 (){ return this.db.collection('DotRace').doc('51').valueChanges() } 
    readDatabase52 (){ return this.db.collection('DotRace').doc('52').valueChanges() } 
    readDatabase53 (){ return this.db.collection('DotRace').doc('53').valueChanges() } 
    readDatabase61 (){ return this.db.collection('DotRace').doc('61').valueChanges() } 
    readDatabase62 (){ return this.db.collection('DotRace').doc('62').valueChanges() } 
    readDatabase63 (){ return this.db.collection('DotRace').doc('63').valueChanges() }
    readDatabase71 (){ return this.db.collection('DotRace').doc('71').valueChanges() } 
    readDatabase72 (){ return this.db.collection('DotRace').doc('72').valueChanges() } 
    readDatabase73 (){ return this.db.collection('DotRace').doc('73').valueChanges() } 
    readDatabase81 (){ return this.db.collection('DotRace').doc('81').valueChanges() } 
    readDatabase82 (){ return this.db.collection('DotRace').doc('82').valueChanges() } 
    readDatabase83 (){ return this.db.collection('DotRace').doc('83').valueChanges() } 
    readDatabase91 (){ return this.db.collection('DotRace').doc('91').valueChanges() } 
    readDatabase92 (){ return this.db.collection('DotRace').doc('92').valueChanges() } 
    readDatabase93 (){ return this.db.collection('DotRace').doc('93').valueChanges() }
    readDatabase101 (){ return this.db.collection('DotRace').doc('101').valueChanges() }  
    readDatabase102 (){ return this.db.collection('DotRace').doc('102').valueChanges() } 
    readDatabase103 (){ return this.db.collection('DotRace').doc('103').valueChanges() } 
    readDatabase111 (){ return this.db.collection('DotRace').doc('111').valueChanges() } 
    readDatabase112 (){ return this.db.collection('DotRace').doc('112').valueChanges() } 
    readDatabase113 (){ return this.db.collection('DotRace').doc('113').valueChanges() } 
    readDatabase121 (){ return this.db.collection('DotRace').doc('121').valueChanges() }  
    readDatabase122 (){ return this.db.collection('DotRace').doc('122').valueChanges() } 
    readDatabase123 (){ return this.db.collection('DotRace').doc('123').valueChanges() }
    redScore       (){ return this.db.collection('DotRace').doc('redScore').valueChanges() }
    blueScore      (){ return this.db.collection('DotRace').doc('blueScore').valueChanges() }

  claimDot ( id: string) {                        // outgoing claims to remote database
    this.db.collection('DotRace').doc(id).update( {owner: this.playerColor} )
    console.log ('in claimDot:',id)

    if (this.playerColor === 'blue') {                               // Scoretracking state model is broken.
      this.localStateBlueScore = this.localStateBlueScore + 1
      this.db.collection('DotRace').doc('blueScore').update( {score: this.localStateBlueScore} )
    }
    if (this.playerColor === 'red') {
      this.localStateRedScore = this.localStateRedScore + 1
      this.db.collection('DotRace').doc('redScore').update( {score: this.localStateRedScore} )
    }   
  } 



  resetBoard () {
    this.db.collection('DotRace').doc('blueScore').update( {score: 0} )
    this.db.collection('DotRace').doc('redScore').update( {score: 0} )
    this.playerColor = 'lightyellow'
    this.localStateBlueScore = 0
    this.localStateRedScore = 0
    
    let ids: string[] = ['11','12','13','21','22','23','31','32','33','41','42','43','51','52','53','61','62','63','71','72','73','81','82','83','91','92','93','101','102','103','111','112','113','121','122','123']
    ids.forEach(id=>{
      this.db.collection('DotRace').doc(id).update( {owner: 'lightyellow'} )        //initalize database
      this.db.collection('DotRace').doc(id).update( {id: id} )                      //initalize database
    })
  }
}
