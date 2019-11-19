import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentTransactionsComponent } from './payment-transactions/payment-transactions.component';
import { CanActivateRouteGuard} from './prevent-login.guard';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'main-page', component: MainPageComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'transactions', component: PaymentTransactionsComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'admin-page', component: AdminPageComponent, canActivate: [AdminGuardGuard] },
  { path: 'edit-customer', component: EditCustomerComponent ,canActivate: [AdminGuardGuard]}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
