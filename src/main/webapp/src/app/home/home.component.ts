import {AfterContentInit, Component, OnInit} from '@angular/core';
import {RestService} from "../rest.service";
import {Entry} from "../objects/entry";
import {ENTRIES} from "../objects/entries";
import {Router} from "@angular/router";
// import * as $ from 'jquery';
declare var $: any;

// @ts-ignore
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})

export class HomeComponent implements OnInit {

  entries: Entry[];

  constructor(private restService: RestService,
              private router: Router) {
    this.entries = ENTRIES;
  }

  ngOnInit(): void {
    $().ready(function(){
      let $container = $('.masonry-container');

      let doc_width = $(document).width();

      if (doc_width >= 768) {
        $container.masonry({
          itemSelector: '.card-box',
          columnWidth: '.card-box',
          transitionDuration: 500
        });
      } else {
        $('.mas-container').removeClass('mas-container').addClass('row');
      }
    });
  }

  navigateToArticle(entry: Entry): void {
    this.router.navigate(['entry', entry.id]);
  }
}
