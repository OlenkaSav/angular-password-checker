import { Component } from '@angular/core';
import { PasswordService } from '../../password.service';

@Component({
  selector: 'password-checker',
  templateUrl: './password-checker.component.html',
  styleUrl: './password-checker.component.css'
})
export class PasswordCheckerComponent {
    password: string = '';
    strength: string = 'empty';

  constructor(private passwordService: PasswordService) { }

  checkPassword(): void {
    this.strength = this.passwordService.checkPasswordStrength(this.password);
  }

}

