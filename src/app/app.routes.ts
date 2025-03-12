import { Routes } from '@angular/router';
import { LOGGED_ROUTES } from './content/content.routing';

export const routes: Routes = [
    {
        path: '',
        children: LOGGED_ROUTES,
    }
];
