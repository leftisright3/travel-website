/**
 * Top level application routing component
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdditionalComponent} from './additional/additional.component';
import {ExperienceComponent} from './experience/experience.component';
import {SkillsComponent} from './skills-expertise/skills.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'additional',
    component: AdditionalComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: {
      title: ''
    }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
