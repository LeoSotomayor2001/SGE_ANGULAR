import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormUtils } from '../../../../utils/formUtils';
import { AuthService } from '../../services/Auth.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-register-page',
  standalone: false,
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  backendErrors: { [key: string]: string[] } = {};
  isSubmitting: boolean = false;

  registerForm: FormGroup = new FormGroup({});
  formUtils = FormUtils;
  constructor(private authService: AuthService) {}

   ngOnInit() {
    this.registerForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
        telefono: new FormControl('', [Validators.required]),
        ciudad: new FormControl('', [Validators.required, Validators.minLength(3)]),
        direccion: new FormControl('', [Validators.required, Validators.minLength(3)]),
        cedula: new FormControl('', [Validators.required,Validators.min(1000000)]),
        email: new FormControl('', [
          Validators.pattern(FormUtils.emailPattern),
          Validators.required,
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(FormUtils.passwordPattern),
        ]),
        password_confirmation: new FormControl('', [Validators.required]),
      },
      {
        validators: [
          FormUtils.isFieldOneEqualFieldTwo('password', 'password_confirmation'),
        ],
         updateOn: 'blur'
      }
    );
  }

  onSubmit() {
    const {
      email,
      password,
      name,
      apellido,
      telefono,
      direccion,
      cedula,
      password_confirmation,
      ciudad,
    } = this.registerForm.value;
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.authService
      .register(
        email,
        password,
        name,
        apellido,
        telefono,
        direccion,
        cedula,
        password_confirmation,
        ciudad
      )
      .pipe(
        catchError((error) => {
          if (error.error?.errors) {
            this.backendErrors = error.error.errors;
          }
          setTimeout(() => {
            this.backendErrors = {};
          }, 2500);
          return of(null);
        })
      )
      .subscribe((resp) => console.log(resp));
  }
}
