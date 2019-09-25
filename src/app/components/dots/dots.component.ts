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
      // Subscirbe to observables from individual remote documents at firebase.
      this.dotControl.resetBoard()
  }

  markDotOwned (result:any) {      // I react to events from all of the observables
    console.log(result)                        // Dot claims coming back in
    this['owner'+result.id]=result.owner
    console.log(this['owner'+result.id])
  }

  dotClickHandler(id:string) {                 // Dot claims going out
    this.dotControl.claimDot(id)  
  }                                                                     
}
