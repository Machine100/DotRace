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

  handler (playerID:string) {
    console.log (playerID)
    this.playerID=playerID
  }
}
