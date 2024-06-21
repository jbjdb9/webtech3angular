import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

export const routeConfig: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        title: 'Admin'
    },
];