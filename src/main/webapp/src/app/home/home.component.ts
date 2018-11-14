import {Component, OnInit} from '@angular/core';
import {RestService} from "../rest.service";

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})

export class HomeComponent implements OnInit{
  clearanceLevel: string;
  firstName = 'Kushan';
  lastName = 'Patel';

  constructor(private restService: RestService) {

  }

  ngOnInit(): void {
    this.restService.getFromUrl('hello-world').then(resp => {this.clearanceLevel = resp.content});
  }


}
