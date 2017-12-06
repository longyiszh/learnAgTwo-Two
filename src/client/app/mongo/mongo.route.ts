import { RouterModule, Routes } from '@angular/router';

import { MongoComponent } from './mongo.component';
import { MongoIndexComponent } from './mongo-index/mongo-index.component';
import { Mongo404Component } from './mongo404/mongo404.component';

const mongoRoute: Routes = [
    {
        path:'mongo',
        component: MongoComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: MongoIndexComponent
            },
            {
                path: 'index',
                redirectTo: ''
            },
            {
                path:'**',
                component: Mongo404Component
            }
        ]
    }
];

export const mongoRouting = RouterModule.forChild(mongoRoute);