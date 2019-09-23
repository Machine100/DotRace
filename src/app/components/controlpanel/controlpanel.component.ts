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

  handler (buttonID:string) {
    console.log (buttonID)
    this.dotControl.playerColor=buttonID
    console.log (this.dotControl.playerColor)
  }
}
