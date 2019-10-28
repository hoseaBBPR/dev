import { Injectable } from '@angular/core';
import { ContentfulClientApi, createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ContentfulService {

  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
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
