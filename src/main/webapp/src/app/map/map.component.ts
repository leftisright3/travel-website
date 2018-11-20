import {Component, ViewChild} from '@angular/core';
import { } from '@types/googlemaps';

// @ts-ignore
@Component({
  templateUrl: './map.component.html',
  styleUrls: ['../app.component.css']
})


export class MapComponent {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
}
