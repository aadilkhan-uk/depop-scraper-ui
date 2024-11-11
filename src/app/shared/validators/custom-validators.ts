import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ValidationPatterns } from '../constants/validation-patterns';

export class CustomValidators {
  static lettersOnly(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valid = ValidationPatterns.LETTERS_ONLY.test(control.value);
      return valid
        ? null
        : {
            lettersOnly: {
              message: 'Only letters and spaces allowed',
            },
          };
    };
  }
}
