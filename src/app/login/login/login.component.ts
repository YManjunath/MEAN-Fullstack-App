import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { localStorage.removeItem('login-token'); }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  setToken(token: string): void {
    localStorage.setItem('login-token', token)
  }

  getToken(): string | null {
    return localStorage.getItem('login-token')
  }

  onSubmit() {
    console.log(this.loginForm.value)
    if (this.loginForm.value.email == 'manjuyatnatti@gmail.com' && this.loginForm.value.password == 'manju123') {
      this.setToken('true');
      this.router.navigate([''])
    }
  }

}
