import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { Http404Component } from './http404/http404.component';


const lAgTwoRoute: Routes = [
    {
        path:'',
        pathMatch: 'full',
        redirectTo: '/index', 
    },
    {
        path:'index',
        component: IndexComponent
    },
    {
        path:'data-bindings',
        loadChildren: './data-bindings/data-bindings.module#DataBindingsModule'
    },
    {
        path:'**',
        component: Http404Component
    }
];

export default RouterModule.forRoot(lAgTwoRoute,{ useHash: true });