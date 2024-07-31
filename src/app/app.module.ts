import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { AddEditTypeComponent } from './parametrage/add-edit-type/add-edit-type.component';
import { ListTypeComponent } from './parametrage/list-type/list-type.component';
import { AddEditFamilleComponent } from './parametrage/add-edit-famille/add-edit-famille.component';
import { ListFamilleComponent } from './parametrage/list-famille/list-famille.component';
import { AddEditUserComponent } from './parametrage/add-edit-user/add-edit-user.component';
import { ListUserComponent } from './parametrage/list-user/list-user.component';
import { AddEditClientComponent } from './parametrage/add-edit-client/add-edit-client.component';
import { ListClientComponent } from './parametrage/list-client/list-client.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxSpinnerService } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailedComponent,
    AddEditClientComponent,
    ListClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    FormsModule,
    NgbModule, // Import NgbModule
    NgxSpinnerModule // Import NgxSpinnerModule

  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    // {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    // {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
    NgxSpinnerService // Provide NgxSpinnerService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
