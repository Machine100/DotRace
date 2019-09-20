import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DotsComponent } from './components/dots/dots.component';
import { ControlpanelComponent } from './components/controlpanel/controlpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    DotsComponent,
    ControlpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
