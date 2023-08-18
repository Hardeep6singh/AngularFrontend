import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SavedNewsComponent } from './components/saved-news/saved-news.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LogoutComponent } from './components/auth/logout/logout.component';

const routeConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home Page' },
  { path: 'saved-news', component: SavedNewsComponent, title:'News Page'},
  { path: 'login', component: LoginComponent, title: 'Login page'},
  { path: 'register', component:RegisterComponent, title:'Register Page'},
  { path: 'logout', component:LogoutComponent, title:'Logout Page'}
  
];

export default routeConfig;
