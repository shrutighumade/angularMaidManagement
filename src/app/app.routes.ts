import { Routes } from '@angular/router';
import { LoginComponent } from './modules/user-registration/components/login/login.component';
import { RegistrationComponent } from './modules/user-registration/components/registration/registration.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"register",
        component:RegistrationComponent
    }
];
