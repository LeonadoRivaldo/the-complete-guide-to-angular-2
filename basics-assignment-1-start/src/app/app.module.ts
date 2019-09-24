import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { WarningAlertComponent } from './alert/warning-alert/warning-alert.component';
import { SuccesAlertComponent } from './alert/succes-alert/succes-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    WarningAlertComponent,
    SuccesAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
