import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SakesComponent } from './sakes/sakes.component';
import { StoryComponent } from './story/story.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent},
  { path: 'our-story', component: StoryComponent},
  { path: 'our-sakes', component: SakesComponent},
  { path: 'find', component: MapComponent},
  { path: 'contact', component: ContactComponent},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
