import { Component, OnInit } from '@angular/core';
import { DotcontrolService } from '../../dotcontrol/dotcontrol.service';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {

  blueScore: number          // State is only kept in this application so that Angular
  redScore: number           // can dynamically update the DOM with it.
  playerColor: string        // True?
  
  constructor(private dotControl:DotcontrolService) { }

  ngOnInit() {
    this.dotControl.redScore().subscribe(result => { this.scoreUpdateRed(result) } )
    this.dotControl.blueScore().subscribe(result => { this.scoreUpdateBlue(result) } )
  }

  scoreUpdateBlue(result) {
    console.log ('at scoreUpdate',result)
    this.blueScore = result.score
  }

  scoreUpdateRed(result) {
    console.log ('at scoreUpdate',result)
    this.redScore = result.score
  }
  
  playerHandler(buttonID:string) {
    this.dotControl.playerColor = buttonID
    this.playerColor = buttonID
  }
  
  resetBoard() { 
    this.dotControl.resetBoard()
  }

}
