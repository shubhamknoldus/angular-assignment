import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {Routes} from '@angular/router';

export const routeNew: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent,
}, {
  path: 'home',
  component: HomeComponent
}];
