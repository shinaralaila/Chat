
import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ChatService } from '../chat.service';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  room: any = ''
  usrl: any = ''
  constructor(private chatservice: ChatService, private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.usrl = localStorage.getItem("loggedinuser");
  }

  createRoom() {
    console.log("chatroom:create:this.room"); console.log(this.room);
    this.authservice.createRoom(this.usrl, this.room).subscribe()
    this.router.navigate(["users"]);
  }
}
