import { Component } from '@angular/core';
import { RouteConfig, RouterLink } from '@angular/router-deprecated';


import { ACCORDION_DIRECTIVES, CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { ApiService } from './shared';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import {LoggedInRouterOutlet} from './shared/directives/logged-in-router-outlet';
import {LoginComponent, SignupComponent, ActivationComponent} from './user-account/index';



@Component({
  selector: 'my-app',
  providers: [ApiService],
  directives: [RouterLink, ACCORDION_DIRECTIVES, CollapseDirective, LoggedInRouterOutlet],
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
})
@RouteConfig([
  { path: '/', redirectTo: ['/Home'] },
  { path: '/home', component: HomeComponent, name: 'Home' },
  { path: '/about', component: AboutComponent, name: 'About' },
  { path: '/login', component: LoginComponent, name: 'Login' },
  { path: '/signup', component: SignupComponent, name: 'Signup' },
  { path: '/activate', component: ActivationComponent, name: 'Activate' }
])
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
  }
}
