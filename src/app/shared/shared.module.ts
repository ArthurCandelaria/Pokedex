import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//component
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    ListComponent
  ]
})
export class SharedModule { }
