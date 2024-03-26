import { Routes } from '@angular/router';
import { LoginComponent } from './modules/user-registration/components/login/login.component';
import { RegistrationComponent } from './modules/user-registration/components/registration/registration.component';
import { MainLayoutComponent } from './layouts/components/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'home',
    component: MainLayoutComponent,
  },
];
