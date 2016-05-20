import { Component } from '@angular/core';
import { RouteConfig, RouterLink } from '@angular/router-deprecated';


import { ACCORDION_DIRECTIVES, CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { ApiService } from './shared';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import {LoggedInRouterOutlet} from './shared/directives/logged-in-router-outlet';
import {LoginComponent} from './shared/components/index';
import {SignupComponent} from './user-account/signup/index';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [ApiService],
  directives: [RouterLink, ACCORDION_DIRECTIVES, CollapseDirective, LoggedInRouterOutlet],
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
})
@RouteConfig([
  { path: '/', redirectTo: ['/Home'] },
  { path: '/home', component: HomeComponent, as: 'Home' },
  { path: '/about', component: AboutComponent, as: 'About' },
  { path: '/login', component: LoginComponent, as: 'Login' },
  { path: '/signup', component: SignupComponent, as: 'Signup' }
])
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
  }
}
