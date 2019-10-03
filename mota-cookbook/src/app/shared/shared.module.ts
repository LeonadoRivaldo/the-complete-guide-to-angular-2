import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './components/list-item/list-item.component';
import { DetailHeaderComponent } from './components/detail-header/detail-header.component';


@NgModule({
  declarations: [
    ListItemComponent,
    DetailHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListItemComponent,
    DetailHeaderComponent
  ]
})
export class SharedModule { }
