import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideInAnimation } from './route-animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  animations: [ slideInAnimation ]

})
export class AppComponent implements OnInit {
  constructor(
    public router: Router,
  ) { }
  ngOnInit() {}


}
