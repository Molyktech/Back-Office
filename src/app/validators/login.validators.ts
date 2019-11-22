import { AbstractControl, ValidationErrors } from '@angular/forms';
import { reject } from 'q';

export class LoginValidators {
  static shouldNotHaveSpaces(
    control: AbstractControl
  ): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {
        shouldNotHaveSpaces: true
      };
    }
    return null;
  }

  // would be changed when the api is ready
  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value !== '') {
          resolve({ shouldBeUnique: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
