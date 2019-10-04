import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './components/list-item/list-item.component';
import { DetailHeaderComponent } from './components/detail-header/detail-header.component';
import { ListContainerComponent } from './components/list-container/list-container.component';

@NgModule({
  declarations: [
    ListItemComponent,
    DetailHeaderComponent,
    ListContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListItemComponent,
    DetailHeaderComponent,
    ListContainerComponent
  ]
})
export class SharedModule { }
