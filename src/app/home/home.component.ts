import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, Title, Meta } from '@angular/platform-browser';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  home: Entry<any>;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    public sanitizer: DomSanitizer,
    private contentfulService: ContentfulService
  ) {
  }

  ngOnInit(): void {
    const homeId = 'g8ZYH3OYKGmprvvLvXij4';
    this.contentfulService.getHomePage(homeId)
      .then((home) => {
        this.home = home;
        this.titleService.setTitle(home.fields.seoTitle);
        this.meta.addTag({ id: "siteDescription", name: "description", content: home.fields.seoDescription });

        this.meta.updateTag({ property: 'og:title', content: home.fields.seoTitle });
        this.meta.updateTag({ property: 'og:description', content: home.fields.seoDescription });
        this.meta.updateTag({ property: 'og:site_name', content: home.fields.seoTitle });
        // this.meta.updateTag({ property: 'og:url', content: "https://example.com/home" });
        console.log('home data', this.home);
      });
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    setTimeout(() => { }, 500);
  }

}
