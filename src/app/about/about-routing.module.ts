import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutInfosComponent } from './about-infos/about-infos.component';
import { FounderInfoComponent } from './founder-info/founder-info.component';
import { ServiceListComponent } from './service-list/service-list.component';

const routes: Routes = [{
  path: 'about', 
  component: AboutInfosComponent,
  children: [
      {path: 'founder', component: FounderInfoComponent},
      {path: 'services', component: ServiceListComponent}
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
