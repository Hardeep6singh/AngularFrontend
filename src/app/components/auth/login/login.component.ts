import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from '../../../services/auth.service';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  registeredUserList: any[] = [];  // Assuming you have declared this array

  onSubmit() {
    this.authService
      .login(this.loginForm.value.email!, this.loginForm.value.password!)
      .subscribe({
        next: (token) => {
          console.log('token'+token);
          // this.authToken = token;
          //localStorage.setItem('authtoken', token.token);
          this.router.navigateByUrl('/saved-news');
        },
        error: (e) => {
          console.log(e.error.errors);
        },
        complete: () => {
          console.info('complete');
        },
      });
  }
}
