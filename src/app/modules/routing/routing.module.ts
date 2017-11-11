import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { WelcomeViewComponent } from './../../views/welcome-view/welcome-view.component';
import { ConfigureViewComponent } from './../../views/configure-view/configure-view.component';
import { PlayViewComponent } from './../../views/play-view/play-view.component';

const routes: Routes = [ {
    path: '', redirectTo: '/welcome', pathMatch: 'full' }, {
    path: 'welcome',
    component: WelcomeViewComponent
  },
  {
    path: 'configure',
    component: ConfigureViewComponent
  },
  {
    path: 'play',
    component: PlayViewComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
