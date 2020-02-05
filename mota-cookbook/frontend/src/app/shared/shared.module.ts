import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './components/list-item/list-item.component';
import { DetailHeaderComponent } from './components/detail-header/detail-header.component';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { MainListViewComponent } from './components/main-list-view/main-list-view.component';

@NgModule({
  declarations: [
    ListItemComponent,
    DetailHeaderComponent,
    ListContainerComponent,
    MainListViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListItemComponent,
    DetailHeaderComponent,
    ListContainerComponent,
    MainListViewComponent
  ]
})
export class SharedModule { }
