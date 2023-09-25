import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit-product/:productId', component: EditProductComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
