import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutInfosComponent } from './about-infos/about-infos.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { FounderInfoComponent } from './founder-info/founder-info.component';


@NgModule({
  declarations: [
    AboutInfosComponent,
    ServiceListComponent,
    FounderInfoComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [AboutInfosComponent]
})
export class AboutModule { }
