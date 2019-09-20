import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {

  playerID: string

  constructor() { }

  ngOnInit() {
  }

  handler (buttonID:string) {
    console.log (buttonID)
    this.playerID=buttonID
  }
}
