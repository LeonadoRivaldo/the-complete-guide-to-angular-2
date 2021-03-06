import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// FEATURES MODULES
import { ShoppingModule } from './shopping/shopping.module';
import { RecipesModule } from './recipes/recipes.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuHeaderComponent } from './header/menu-header/menu-header.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuHeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    NgbModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
