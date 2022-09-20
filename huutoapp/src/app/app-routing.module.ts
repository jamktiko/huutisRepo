import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './creation/creation.component';
import { EtusivuComponent } from './etusivu/etusivu.component';
import { UsernameComponent } from './username/username.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  { path: '', redirectTo: '/etusivu', pathMatch: 'full' },
  { path: 'creation', component: CreationComponent },
  { path: 'etusivu', component: EtusivuComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'user', component: UsernameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }