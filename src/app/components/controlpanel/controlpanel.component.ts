import { Component, OnInit } from '@angular/core';
import { DotcontrolService } from '../../dotcontrol/dotcontrol.service';
//import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {

  blueScore: number
  redScore: number
  
  constructor(private dotControl:DotcontrolService) { }

  ngOnInit() {
    this.dotControl.redScore().subscribe(result=> {this.increaseRedScore(result)} )
    this.dotControl.blueScore().subscribe(result=>{this.increaseBlueScore(result)} )
  }

  playerHandler (buttonID:string) {
    this.dotControl.playerColor=buttonID
  }
  
  resetBoard () { this.dotControl.resetBoard() }

  increaseRedScore (result) {console.log ('atincreaseRedScore', result)}
  increaseBlueScore(result) {console.log ('atincreaseBlueScore', result)}
}
