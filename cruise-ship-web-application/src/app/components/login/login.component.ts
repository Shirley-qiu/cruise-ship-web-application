import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if(auth) {
        this.router.navigate(['/']);
      }
    })
  }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .then(res => {
        window.alert('You are now logged in');
        this.router.navigate(['/']);
      })
      .catch(err => {
        window.alert(err.message);
      });
  }
}
