import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  // LANDING PAGE WILL LIST ALL JOBS
  { path: '', component: LandingComponent},
  // THIS ROUTE WILL TAKE YOU TO THE PAGE TO ADD JOB
  { path: 'addJob', component: AddComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'job/:id', component: SingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
