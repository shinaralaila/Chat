import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
user:any={
  username:"",
  email:"",
  password:""
}
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
loginUser(){
  // console.log(this.user)
  localStorage.setItem("loggedinuser",this.user.username)//stored login user in setItm
  this.auth.loginUser(this.user).subscribe((data:any)=>{
    
      this.router.navigate(["users"]);
    
  })
}
}
