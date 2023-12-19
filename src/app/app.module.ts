import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TictactoeComponent } from './components/tictactoe/tictactoe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TictactoeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
