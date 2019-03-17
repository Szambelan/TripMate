import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartViewComponent } from './start-view/start-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';

const routes: Routes = [
  { path: '', component: StartViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'register', component: RegisterViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [StartViewComponent, LoginViewComponent, RegisterViewComponent]
