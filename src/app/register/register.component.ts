import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData: any = {
    username: "",
    email: "",
    password: ""

  }
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.auth.registerUser(this.registerUserData)
      .subscribe()
    this.router.navigate(["home"]);
  }

}
