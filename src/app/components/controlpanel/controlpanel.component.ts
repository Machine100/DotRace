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
  
  constructor(private dotControl:DotcontrolService) { this.blueScore = 0}

  ngOnInit() {
    this.dotControl.redScore().subscribe(result=> {this.scoreUpdateRed(result)} )
    this.dotControl.blueScore().subscribe(result=> {this.scoreUpdateBlue(result)} )
  }

  scoreUpdateBlue (result) {
    console.log ('at scoreUpdate',result)
    this.blueScore = result.score
  }

  scoreUpdateRed (result) {
    console.log ('at scoreUpdate',result)
    this.redScore = result.score
  }
  
  playerHandler (buttonID:string) {
    this.dotControl.playerColor=buttonID
  }
  
  resetBoard () { this.dotControl.resetBoard() }

}
