import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormUtils } from '../../../../utils/formUtils';

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
  constructor() {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.minLength(3)]),
      apellido: new FormControl('', [Validators.required,Validators.minLength(3)]),
      telefono: new FormControl('', [Validators.required,Validators.pattern(FormUtils.passwordPattern)]),
      ciudad: new FormControl('', [Validators.required,Validators.minLength(3)]),
      direccion: new FormControl('', [Validators.required,Validators.minLength(3)]),
      cedula: new FormControl(0, [Validators.required]),
      email: new FormControl('', [
        Validators.pattern(this.formUtils.emailPattern),
        Validators.required,
      ]),
      password: new FormControl('', [Validators.required]),
      password_confirmation: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }
}
