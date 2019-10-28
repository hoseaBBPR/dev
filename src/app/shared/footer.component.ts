import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  info: Entry<any>;
  date: any;
  constructor(
    private contentfulService: ContentfulService,
    public router: Router
  ) { }

  ngOnInit() {
      this.contentfulService.getCompanyInfo()
        .then(info => {
          this.info = info;
        })
  }

}
