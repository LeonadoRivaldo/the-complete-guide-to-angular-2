import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// FEATURES MODULES
import { ShoppingModule } from './shopping/shopping.module';
import { RecipesModule } from './recipes/recipes.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuHeaderComponent } from './header/menu-header/menu-header.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuHeaderComponent
  ],
  imports: [
    RecipesModule,
    ShoppingModule,
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
