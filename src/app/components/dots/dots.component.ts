import { Component, OnInit } from '@angular/core';
import { DotcontrolService } from '../../dotcontrol/dotcontrol.service';
import { Dot } from '../../models/Dot'


@Component({
  selector: 'app-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.css']
})
export class DotsComponent implements OnInit {

  owner11: string; owner12: string; owner13: string
  owner21: string; owner22: string; owner23: string
  owner31: string; owner32: string; owner33: string
  owner41: string; owner42: string; owner43: string
  owner51: string; owner52: string; owner53: string
  owner61: string; owner62: string; owner63: string
  owner71: string; owner72: string; owner73: string
  owner81: string; owner82: string; owner83: string
  owner91: string; owner92: string; owner93: string
  owner101: string; owner102: string; owner103: string
  owner111: string; owner112: string; owner113: string
  owner121: string; owner122: string; owner123: string
  
  constructor(private dotControl:DotcontrolService) { }

  ngOnInit() {
      this.dotControl.readDatabase11().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase12().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase13().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase21().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase22().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase23().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase31().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase32().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase33().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase41().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase42().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase43().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase51().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase52().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase53().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase61().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase62().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase63().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase71().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase72().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase73().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase81().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase82().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase83().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase91().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase92().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase93().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase101().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase102().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase103().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase111().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase112().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase113().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase121().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase122().subscribe(result=>{ this.markDotOwned(result) })
      this.dotControl.readDatabase123().subscribe(result=>{ this.markDotOwned(result) })    
      // Subscirbe to observables from individual remote documents at firebase.
      this.dotControl.resetBoard()
  }
  
  markDotOwned (result:any) {                             // Dot claims coming back in
    console.log(result)                                   // I react to events from all of the observables
    this['owner'+result.id]=result.owner
  }

  dotClickHandler(id:string) {                            // Dot claims going out
    console.log('at dotClickHandler',this['owner'+id])
    if (this['owner'+id] == 'lightyellow'){               // Only allow players to claim unclaimed dots
      console.log('if condition passed')
      this.dotControl.claimDot(id)  
    }
    }                                                                     
}
