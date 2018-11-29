import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { } from '@types/googlemaps';
import {Entry} from "../objects/entry";
import {ENTRIES} from "../objects/entries";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {isNullOrUndefined} from "util";

// @ts-ignore
@Component({
  templateUrl: './entry.component.html',
  styleUrls: ['../app.component.css']
})


export class EntryComponent implements OnInit {

  entry: Entry;
  videoBaseUrl = 'https://www.youtube.com/embed/';
  embedLocal = 'assets/js/embed.js';


  constructor(private sanitizer: DomSanitizer,
              private route: ActivatedRoute) {
    var el = document.getElementById("albumEmbed");
    !isNullOrUndefined(el) ? el.remove(): null;
    var albumEmbed = document.createElement("script");
    albumEmbed.setAttribute("async", "async");
    albumEmbed.setAttribute("id", "albumEmbed");
    albumEmbed.setAttribute("src", this.embedLocal);
    document.body.appendChild(albumEmbed);
  }

  ngOnInit() {
    let entryId = null;
    this.route.params.subscribe( params => entryId = params.entryId );
    if (!isNullOrUndefined(entryId)) {
      this.entry = ENTRIES.find(item => {
        if (item.id.toString() === entryId) {
          return true;
        } else {
          return false;
        }
      });
    }
  }

}
