import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { DayOfWeekComponent } from './component/day-of-week/day-of-week.component';
import { AddNewProductComponent } from './component/add-new-product/add-new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    ProductFormComponent,
    EditProductComponent,
    DayOfWeekComponent,
    AddNewProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
