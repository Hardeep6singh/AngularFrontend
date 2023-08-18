import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent{
 
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}
  registerForm = new FormGroup({
    firstName: new FormControl<string | null>('', Validators.required),
    lastName: new FormControl<string | null>('', Validators.required),
    email: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    contact: new FormControl('', Validators.required),
    password: new FormControl<string | null>('', [Validators.required, Validators.minLength(8)])
  });


  onSubmit() {
    this.authService
      .register(
        this.registerForm.value.firstName!,
        this.registerForm.value.lastName!,
        this.registerForm.value.email!,
        this.registerForm.value.contact!,
        this.registerForm.value.password!
      )
      .subscribe({
        next: (token) => {
          console.log(token);
          // this.authToken = token;
          //localStorage.setItem('authtoken', token.token);
          this.router.navigateByUrl('/news');
        },
        error: (e) => {
          console.log(e.error.errors);
          this.errorMessage = e.error.errors[0].msg;
        },
        complete: () => {
          console.info('complete Register');
        },
      });
  }
}
