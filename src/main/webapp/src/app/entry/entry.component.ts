import {Component, ViewChild} from '@angular/core';
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


export class EntryComponent {

  entry: Entry;

  constructor(private sanitizer: DomSanitizer,
              private route: ActivatedRoute) {
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
    console.log(this.entry);
  }
}
