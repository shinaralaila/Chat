import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-blockedusers',
  templateUrl: './blockedusers.component.html',
  styleUrls: ['./blockedusers.component.css']
})
export class BlockedusersComponent implements OnInit {
  usrl: any
  blockedusers: any


  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.usrl = localStorage.getItem("loggedinuser");//get the loginuser which is in setitem in homecomponent
    this.authservice.blocked(this.usrl).subscribe((data: any) => {
      this.blockedusers = JSON.parse(JSON.stringify(data));
      
    })
  };

  unblockuser(usrl: any, usrb: any) {
    // console.log("user-unblockuser");
    // console.log("usrl:"); console.log(usrl);
    // console.log("usrb:"); console.log(usrb);
    this.authservice.unblockuser(usrl, usrb).subscribe((data: any) => {
      //this.router.navigate(['/blockuser'], { queryParams: { usrl: usrl, usrb: usrb } });
    })
  }

}
