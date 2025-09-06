import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/Auth.service';
import { catchError, of } from 'rxjs';
import { FormUtils } from '../../../../utils/formUtils';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  isSubmitting: boolean = false;
  loginForm: FormGroup = new FormGroup({});
  backendErrors: { [key: string]: string[] } = {};
  backendFail: string = '';
  formUtils = FormUtils;
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.pattern(this.formUtils.emailPattern),
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      user_type: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    const { email, password, user_type } = this.loginForm.value;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.authService
      .login(email, password, user_type)
      .pipe(
        catchError((error) => {
          if (error.error?.errors) {
            this.backendErrors = error.error.errors;
          } else if (error.error?.fail) {
            this.backendFail = error.error.fail;
          }
          setTimeout(() => {
            this.backendErrors = {};
            this.backendFail = '';
          }, 2500);
          return of(null);
        })
      )
      .subscribe((resp) => {
        if (resp) {
          console.log(resp);
        }
      });
  }
}
