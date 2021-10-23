import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {   path: '', component: HomeComponent,},
  {   path: '**',  component: NotFoundComponent,},
  {   path: '', component: FeaturesComponent,},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
