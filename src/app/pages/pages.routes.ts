import { Routes } from '@angular/router';

export default [
    {
        path: 'real-estate',
        loadComponent: () => import('./real-estate/index').then(m => m.RealEstate)
    },
    {
        path: 'second-pages/contact',
        loadComponent: () => import('./second-pages/contact/index').then(m => m.Contact)
    },
    {
        path: 'second-pages/about',
        loadComponent: () => import('./second-pages/about/index').then(m => m.About)
    }
] as Routes;
