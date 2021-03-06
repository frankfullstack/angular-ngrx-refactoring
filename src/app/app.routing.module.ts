import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: 'app/pages/home/home.module#HomeModule'
  },
  {
    path: 'flight',
    loadChildren: 'app/pages/flight/flight.module#FlightModule'
  }
];
const extraOptions = { useHash: true }

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, extraOptions)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
