import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';

const routes: Routes = [
  { path: "sign-up", component: SignUpComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent, canActivate: [adminGuard] },
  { path: "home", component: HomeComponent, canActivate: [authGuard] },
  { path: "add-to-cart", component:AddToCartComponent, canActivate: [authGuard] },
  { path: "add", component: AddProductComponent, canActivate: [adminGuard] },
  { path: "update/:id", component: UpdateProductComponent, canActivate: [adminGuard] },
  { path: "admin-login", component: AdminLoginComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
