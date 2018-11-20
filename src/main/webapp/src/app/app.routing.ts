/**
 * Top level application routing component
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MapComponent} from "./map/map.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'map',
    component: MapComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'about',
    component: AboutComponent,
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
