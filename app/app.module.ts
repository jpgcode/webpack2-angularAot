import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule,  HttpModule, FormsModule],
  declarations: [
    AppComponent
  ],
  providers: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
