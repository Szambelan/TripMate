import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserService} from './shared/user.service';
import {HomeService} from './shared/home.service';
import {AuthGuard} from './auth/auth.guard';
import {TripService} from './shared/trip.service';

// import { UserComponent } from './user/user.component';
import { ProfileViewComponent } from './home/profile-view/profile-view.component';
import { TripViewComponent } from './home/trip-view/trip-view.component';
import { ProfileViewEditComponent } from './home/profile-view-edit/profile-view-edit.component';
import { TripAddComponent } from './home/trip-add/trip-add.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
      // UserComponent,
      ProfileViewComponent,
      TripViewComponent,
      ProfileViewEditComponent,
      TripAddComponent
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
    HomeService,
    AuthGuard,
  TripService
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
