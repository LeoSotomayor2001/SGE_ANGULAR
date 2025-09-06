import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static passwordPattern =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$';
  static getTextError(errors: ValidationErrors) {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Minimo de ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `Valor minimo de ${errors['min'].min} `;
        case 'email':
          return 'El correo no es valido';
        case 'pattern':
          if (errors['pattern'].requiredPattern === FormUtils.emailPattern) {
            return 'EL valor ingresado no luce como un correo electronico';
          }
          if (errors['pattern'].requiredPattern === FormUtils.passwordPattern) {
            return 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.';
          }
          return 'Error de patron contra expresion regular';

        default:
          return 'Error no controlado';
      }
    }
    return null;
  }

  static isFieldOneEqualFieldTwo(campo: string, campo2: string) {
    return (formGroup: AbstractControl) => {
      const field1Value = formGroup.get(campo)?.value;
      const field2Value = formGroup.get(campo2)?.value;

      return field1Value === field2Value ? null : { passwordNotEqual: true };
    };
  }

  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return (
      !!form.controls[fieldName].errors && form.controls[fieldName].touched
    );
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;
    const errors = form.controls[fieldName].errors ?? {};

    return FormUtils.getTextError(errors);
  }
}
