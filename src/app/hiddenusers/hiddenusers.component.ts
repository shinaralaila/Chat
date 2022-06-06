import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hiddenusers',
  templateUrl: './hiddenusers.component.html',
  styleUrls: ['./hiddenusers.component.css']
})
export class HiddenusersComponent implements OnInit {
  usrl: any
  hiddenusers: any


  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.usrl = localStorage.getItem("loggedinuser");//get the loginuser which is in setitem in homecomponent
    this.authservice.hidden(this.usrl).subscribe((data: any) => {
      this.hiddenusers = JSON.parse(JSON.stringify(data));
      console.log("hiddenusers:");console.log(this.hiddenusers);
    })
  }

  unhideuser(usrl: any, usrh: any) {
    // console.log("user-unblockuser");
    // console.log("usrl:"); console.log(usrl);
    // console.log("usrb:"); console.log(usrb);
    this.authservice.unhideuser(usrl, usrh).subscribe((data: any) => {
      //this.router.navigate(['/hideuser'], { queryParams: { usrl: usrl, usrb: usrb } });
    })
  }
}
