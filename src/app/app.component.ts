import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';


import { ACCORDION_DIRECTIVES,CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { ApiService } from './shared';
import { HomeComponent } from './home';
import { AboutComponent } from './about';



/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [ApiService],
  directives: [...ROUTER_DIRECTIVES, ACCORDION_DIRECTIVES,CollapseDirective],
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
})
@RouteConfig([
  {path: '/', component: HomeComponent, name: 'Home'},
  {path: '/About', component: AboutComponent, name: 'About'}
])
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
  }
}
