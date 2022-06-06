import { ChatService } from './../chat.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
//import { NavigationExtras,Router } from '@angular/router';


@Component({
  selector: 'app-chatinbox',
  templateUrl: './chatinbox.component.html',
  styleUrls: ['./chatinbox.component.css']
})
export class ChatinboxComponent implements OnInit {
  socket: any
  message: any;
  messages:any=[]
  users: any
  public id: any;
  name: any
   SOCKET_ENDPOINT = 'localhost:3000';
  constructor(private authservice: AuthService, private router: Router, private chatservice:ChatService) { }

  ngOnInit(): void {
    this.setupSocketConnection();
    this.chatservice
    .getMessages()
    .subscribe((message: string) => {
      this.messages.push(message);
    });
  }

  setupSocketConnection() {
    this.socket = io(this.SOCKET_ENDPOINT);
    this.socket.on('message-broadcast', (data: string) => {
      if (data) {
        const element = document.createElement('li');
        element.innerHTML = data;
        element.style.background = 'white';
        element.style.padding = '15px 30px';
        element.style.margin = '10px';

        const Idelement = document.getElementById('message-list')
        if (Idelement === null) {
          alert('oops')
        } else
          Idelement.appendChild(element);
      }
    });
  }

  SendMessage() {
    var usrl= localStorage.getItem("loggedinuser");
    // var data = usrl + '@' + formatDate(new Date()) +':\n' + this.message;
    var data = this.message;
    var a=this.socket.emit('new-message', data);
    console.log(a);
    const element = document.createElement('li');
    element.innerHTML = data;
    element.style.background = 'white';
    element.style.padding = '15px 30px';
    element.style.margin = '10px';
    element.style.textAlign = 'right';
    const Idelement = document.getElementById('message-list')
    if (Idelement === null) {
      alert('oops')
    } else
      Idelement.appendChild(element);
    this.message = '';
  }
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}
function formatDate(date: Date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}
// 👇️ 24/10/2021 (dd/mm/yyyy)
console.log(formatDate(new Date()));