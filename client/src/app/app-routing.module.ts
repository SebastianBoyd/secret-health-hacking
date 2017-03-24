import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourcesComponent } from './resources/resources.component';
import { VisualizationsComponent } from './visualizations/visualizations.component';

const appRoutes: Routes = [
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'visualizations',
    component: VisualizationsComponent
  },
  {
    path: '**',
    redirectTo: 'visualizations',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
