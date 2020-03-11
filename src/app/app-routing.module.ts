import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineLessionListComponent } from './online-lession-list/online-lession-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component:  OnlineLessionListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
