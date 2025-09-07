import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './layout/auth.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginPageComponent,
    RegisterPageComponent,
    WelcomeMessageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
]
})
export class AuthModule { }
