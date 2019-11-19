import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PaymentComponent } from './payment/payment.component';
import { MatMenuModule} from '@angular/material/menu';
import { PaymentTransactionsComponent } from './payment-transactions/payment-transactions.component';
import { CanActivateRouteGuard} from './prevent-login.guard';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { IgxTabsModule } from 'igniteui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AngularMaterialModule } from './angular-material.modute';
import { MatButtonModule, MatNativeDateModule } from '@angular/material';
// import { HttpErrorInterceptor } from './http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegistrationComponent,
    LoginComponent,
    CustomerComponent,
    MainPageComponent,
    PaymentComponent,
    PaymentTransactionsComponent,
    AdminPageComponent,
    EditCustomerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    IgxTabsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    AngularMaterialModule,
    MatButtonModule,
    MatNativeDateModule
  ],
  providers: [CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
