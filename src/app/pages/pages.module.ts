import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//module
import { PageRoutingModule } from './pages-rounting.module';
import { SharedModule } from '../shared/shared.module';

//component
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
