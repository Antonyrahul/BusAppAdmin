import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusComponent} from './bus/bus.component'
import {RegistrationComponent} from './registration/registration.component'
import {LoginComponent} from './login/login.component'
import {MyticketsComponent} from './mytickets/mytickets.component'


const routes: Routes = [
  {
    path:"buses",
    component:BusComponent
  },
  {
    path:"registrations",
    component:RegistrationComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"allusers",
    component:MyticketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
