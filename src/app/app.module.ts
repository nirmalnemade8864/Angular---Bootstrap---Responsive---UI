import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Header1Component } from './header1/header1.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { AlertComponent } from './alert/alert.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Header1Component,
    UserComponent,
    FormComponent,
    AlertComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
