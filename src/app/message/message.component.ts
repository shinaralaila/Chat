import { Router } from '@angular/router';
import { ChatService } from './../chat.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  userName = '';
  message = '';
  messageList: {message: string, userName: string, mine: boolean}[] = [];
  userList: string[] = [];
  socket: any;

  constructor(private chatservice:ChatService,private authservice:AuthService,private router:Router) { 
  ;
 /*  this.chatservice.receivedTyping().subscribe(bool => {
    this.isTyping = bool.isTyping; */
  // });
 }

  ngOnInit(): void {
    // this.username = this.router.snapshot.queryParamMap.get('name');
  // this.email = this.router.snapshot.queryParamMap.get('email');
  /* const currentUser = this.authservice.getLoggedInUser();
  if ( currentUser.username < this.username) {
    this.chatroom = currentUser.username.concat(this.username);
  } else {
    this.chatroom = this.username.concat(currentUser.username);
  }
  this.chatservice.joinRoom({user: this.authservice.getLoggedInUser().username, room: this.chatroom});
  this.authservice.getChatRoomsChat(this.chatroom).subscribe((data:any) => {
    // this.messageArray = messages;
  }); */
 
}
userNameUpdate(name: string): void {
  this.socket  = io('http://localhost:3000');
  this.userName = name;

  this.socket.emit('set-user-name', name);

  this.socket.on('user-list', (userList: string[]) => {
    this.userList = userList;
  });

  this.socket.on('message-broadcast', (data: {message: string, userName: string}) => {
    if (data) {
      this.messageList.push({message: data.message, userName: data.userName, mine: false});
    }
  });
}

sendMessage(): void {
  this.socket.emit('name-message', this.message);
  this.messageList.push({message: this.message, userName: this.userName, mine: true});
  this.message = '';
}

}
