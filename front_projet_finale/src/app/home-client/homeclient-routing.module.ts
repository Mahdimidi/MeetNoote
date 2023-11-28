import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientGuard } from '../guards/client-guard.guard';
import { HomeClientComponent } from './home-client.component';
import { InviteComponent } from '../invite/invite.component';
import { AjoutinviteComponent } from '../ajoutinvite/ajoutinvite.component';





const routes: Routes = [
  {
    path: '',
    
    canActivate: [ClientGuard],
    children: [
      { path: 'homeclient', component: HomeClientComponent },
     
      { path: 'invite', component: InviteComponent },

      { path: 'ajoutinvite', component: AjoutinviteComponent },

    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeClientRoutingModule { }