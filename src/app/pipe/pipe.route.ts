import { RouterModule, Routes } from '@angular/router';

import { PipeComponent } from './pipe.component';
import { PipeIndexComponent } from './pipe-index/pipe-index.component';
import { Pipe404Component } from './pipe404/pipe404.component';

const pipeRoute: Routes = [
    {
        path:'pipe',
        component: PipeComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: PipeIndexComponent
            },
            {
                path: 'index',
                redirectTo: ''
            },
            {
                path:'**',
                component: Pipe404Component
            }
        ]
    }
];

export default RouterModule.forChild(pipeRoute);