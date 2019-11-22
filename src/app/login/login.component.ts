import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginValidators } from './../validators/login.validators';
import { LoginService } from './../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  loginForm: FormGroup;
  returnUrl: string;
  errorMessage: string;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // redirect to home if already logged in
    if (this.loginService.currentUserValue) {
      this.router.navigate(['/navigation']);
    }
  }
  ngOnInit() {
    localStorage.removeItem('currentUser');
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        LoginValidators.shouldNotHaveSpaces
      ])
    });
    // get return url from route parameters or default to '/navigate'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/navigation';
  }

  get f() {
    return this.loginForm.controls;
  }
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.loginService.login(this.loginForm.value).subscribe(
      res => {
        this.loading = false;
        if (res === null) {
          this.errorMessage = 'Error invalid login details';
        } else {
          this.router.navigate(['/navigation']);
        }
      },
      error => {
        this.loading = false;
        console.log(error);
      }
    );
  }
}
