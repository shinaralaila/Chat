import { ChatService } from './../chat.service';
import { NavbarComponent } from './../navbar/navbar.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
// import { io, Socket } from 'socket.io-client'; 
// import { ActivatedRoute } from '@angular/router';
// import { ChatinboxComponent } from '../chatinbox/chatinbox.component';
import { NavigationExtras } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from '../chat/chat.component';

const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usrl: any
  users: any
  socket: any
  message: any
  rooms: any
  //sub!: Observable<any>;

  //params:any
  constructor(private authservice: AuthService, private router: Router,private chatservice:ChatService) { }

  ngOnInit(): void {

    this.usrl = localStorage.getItem("loggedinuser");//get the loginuser which is in setitem in homecomponent
    // console.log("LoggedIn");console.log(this.usrl);
    //stored getitem to usrl and passed to function getusers which inturn called in authservice api
    this.authservice.getUsers(this.usrl).subscribe((data: any) => {
      // this.users = users.json();
      this.users = JSON.parse(JSON.stringify(data));
      // console.log(this.users);
    });

    this.authservice.getRooms(this.usrl).subscribe((data: any) => {
      this.rooms = JSON.parse(JSON.stringify(data));
      console.log("user-rooms:"); console.log(this.rooms);
    })
  }

  

  chatuser(usrl: any, usrc: any) {
    // console.log("user-chatuser");
    // console.log("usrl:"); console.log(usrl);
    // console.log("usrc:"); console.log(usrc);
    this.authservice.chatuser(usrl, usrc).subscribe((data: any) => {
      //this.router.navigate(['/chatuser'], { queryParams: { usrl: usrl, usrc: usrc } });
    })
    this.chatservice.onUsernameSelection(usrl)
  }
  blockuser(usrl: any, usrb: any) {
    // console.log("user-blockuser");
    // console.log("usrl:"); console.log(usrl);
    // console.log("usrb:"); console.log(usrb);
    this.authservice.blockuser(usrl, usrb).subscribe((data: any) => {
      //this.router.navigate(['/blockuser'], { queryParams: { usrl: usrl, usrb: usrb } });
    })
  }
  hideuser(usrl: any, usrh: any) {
    // console.log("user-hideuser");
    // console.log("usrl:"); console.log(usrl);
    // console.log("usrh:"); console.log(usrh);
    this.authservice.hideuser(usrl, usrh).subscribe((data: any) => {
      // this.router.navigate(['/hideuser'], { queryParams: { usrl: usrl, usrh: usrh } });
    })
  }
  roomuser(usrl: any, room: any) {
    // console.log("user-roomuser");
    // console.log("usrl:"); console.log(usrl);
    // console.log("room:"); console.log(room);
    this.authservice.roomuser(usrl, room).subscribe((data: any) => {
      //this.router.navigate(['/roomuser'], { queryParams: { usrl: usrl, room: room } });
    })
  }
}
