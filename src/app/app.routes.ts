import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';

export const routeConfig: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        title: 'Admin'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    }
];