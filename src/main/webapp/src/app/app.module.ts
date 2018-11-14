import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {RestService} from './rest.service';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AdditionalComponent} from './additional/additional.component';
import {ExperienceComponent} from './experience/experience.component';
import {SkillsComponent} from './skills-expertise/skills.component';

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
    AdditionalComponent,
    ExperienceComponent,
    SkillsComponent
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
