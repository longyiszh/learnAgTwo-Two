import { RouterModule, Routes } from '@angular/router';

import { DataBindingsComponent } from './data-bindings.component';
import { DBindIndexComponent } from './d-bind-index/d-bind-index.component';
import { DBind404Component } from './d-bind404/d-bind404.component';


const dBindingRoute: Routes = [
    {
        path:'data-bindings',
        component: DataBindingsComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: DBindIndexComponent
            },
            {
                path: 'index',
                redirectTo: ''
            },
            {
                path:'**',
                component: DBind404Component
            }
        ]
    }
];
export default RouterModule.forChild(dBindingRoute);