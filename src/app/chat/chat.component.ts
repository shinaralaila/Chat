import { ChatService } from './../chat.service';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { io, Socket } from 'socket.io-client';


const SOCKET_ENDPOINT = 'localhost:3000';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message:any;
  messages: any[] = [];
  SOCKET_ENDPOINT = 'localhost:3000';
  socket:any
  constructor(private chatservice: ChatService, private authservice: AuthService) {
    

    
  }
  ngOnInit(): void {
    // this.chatservice
    // .getMessages()
    // .subscribe((message: string) => {
    //   console.log("Chat Comp:"); console.log(message);
    //   this.messages.push(message);
    // });
    this.setupSocketConnection();
    this.chatservice
    .getMessages()
    .subscribe((message: string) => {
      this.messages.push(message);
    });

}

// sendMessage(){
//   this.chatservice.sendMessage(this.message);
//   this.message = '';
// }

setupSocketConnection() {
  this.socket = io(this.SOCKET_ENDPOINT);
  this.socket.on('private-message', this.message)
}
}