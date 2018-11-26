import {Component, ViewChild} from '@angular/core';
import { } from '@types/googlemaps';
import {ɵsetRootDomAdapter} from "@angular/platform-browser";

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
      center: {lat: 35.68, lng: 139.72},
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    // var parser = new geoXML3.parser({map: this.map, processStyles: true});
    // parser.parse("assets/Japan.kmz");

    var kmlLayer = new google.maps.KmlLayer( {
      suppressInfoWindows: true,
      preserveViewport: false,
      map: this.map,
      url: "https://docs.google.com/uc?export=download&id=1QsEqKCWOb5xKnfV2-pIUlyhLsjpWItRF"
    });

    kmlLayer.addListener('click', function(event) {
      var content = event.featureData.infoWindowHtml;
      var testimonial = document.getElementById('capture');
      testimonial.innerHTML = content;
    });
  }
}
