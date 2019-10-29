import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

import {NavComponent} from './shared/nav.component';
import {FooterComponent} from './shared/footer.component';

import { ContentfulService } from './contentful.service';


import {TransferHttpCacheModule} from '@nguniversal/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserAnimationsModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    AngularFontAwesomeModule,
    ScrollToModule.forRoot(),
    TransferHttpCacheModule,
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
