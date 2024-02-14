import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  checkPasswordStrength(password: string): string {
    let strength = 'empty';

    if (password.length === 0) {
      strength = 'empty'
    } else if (password.length <= 8) {
      strength = 'short';
    } else if (/^[a-zA-Z]+$/.test(password) || /^[0-9]+$/.test(password) || /^[^a-zA-Z0-9]+$/.test(password) ) {
        strength = 'easy';
    } else if (
      /^[a-zA-Z0-9]+$/.test(password) ||
      /^[a-zA-Z!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/.test(password) ||
      /^[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/.test(password)
    ) {
      strength = 'medium';
    } else if (/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/) {
      strength = 'strong';
    }
    return strength;
  }

  constructor() { }
}