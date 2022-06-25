import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarvelDcComponent } from './marvel-dc/marvel-dc.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
