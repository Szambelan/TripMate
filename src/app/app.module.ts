import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserService} from './shared/user.service';
import {AuthGuard} from './auth/auth.guard';

// wtf ??? czemu tutaj
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
      UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
      UserService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
