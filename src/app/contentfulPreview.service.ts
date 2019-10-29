import { Injectable } from '@angular/core';
import { ContentfulClientApi, createClient, Entry } from 'contentful';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ContentfulPreviewService {

  private client = createClient({
    space: 'p19n7dd071bm',
    accessToken: 'l126Phxkp4g1EBUOqRggr9h2wUHG4epYoa3jc73QFhc'
  });


  constructor() { }

  getPage(query?: object): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'page'
    }, query))
      .then(res => res.items[0]);
  }
  getCompanyInfo(query?: object): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'companyInfo'
    }, query))
      .then(res => res.items[0]);
  }

  getHomePage(homeId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'page'
    }, { 'sys.id': homeId }))
      .then(res => res.items[0]);
  }

}
