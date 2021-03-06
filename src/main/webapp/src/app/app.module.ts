import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {RestService} from './rest.service';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app.routing';
import {HomeComponent} from './home/home.component';
import {MapComponent} from "./map/map.component";
import {AboutComponent} from "./about/about.component";
import {EntryComponent} from "./entry/entry.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    AboutComponent,
    EntryComponent
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
