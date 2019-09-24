import { Component, OnInit } from '@angular/core';
import { DotcontrolService } from '../../dotcontrol/dotcontrol.service';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {

  

  constructor(private dotControl:DotcontrolService) { }

  ngOnInit() {
  }

  playerHandler (buttonID:string) {
    this.dotControl.playerColor=buttonID
  }
}
