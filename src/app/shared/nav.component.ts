import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { DomSanitizer, SafeResourceUrl, Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'layout-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  nav: Entry<any>;
  info: Entry<any>;
  date: any;
  constructor(
    private contentfulService: ContentfulService,
    private route: ActivatedRoute,
    public router: Router,
    public sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
      this.contentfulService.getCompanyInfo()
        .then(info => {
          this.info = info;
        })
  }

}
