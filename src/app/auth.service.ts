import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private register_url = "http://localhost:3000/register";
  private login_url = "http://localhost:3000/login";
  messageUrl = 'http://localhost:3000/message';
  getMessageUrl = 'http://localhost:3000/savemessages/';

  constructor(private http: HttpClient, private router: Router) { 

  }
  
  registerUser(user: any) {
    return this.http.post<any>(this.register_url, user)
  }

  loginUser(user: any) {
    return this.http.post<any>(this.login_url, user)
  }

  createRoom(usrl: any, room: any) {
    console.log("auth:createroom:room");console.log(room);
   return this.http.get('http://localhost:3000/createroom/'+usrl+'/'+room);
  }

  getRooms(usrl: any) {
    return this.http.get<any>('http://localhost:3000/getrooms/' + usrl)
  }

  loggedIn() {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user != null ? true : false;
  }

  getLoggedInUser() {
    return JSON.parse(localStorage.getItem('user:')!);

  }
  getUsers(usrl: any) {
    return this.http.get<any>('http://localhost:3000/users/' + usrl);
  }

  blocked(usrl: any) {
    return this.http.get<any>('http://localhost:3000/blocked/' + usrl);
  }

  hidden(usrl: any) {
    return this.http.get<any>('http://localhost:3000/hidden/' + usrl);
  }

  chat(user: any) {
    return this.http.post<any>('http://localhost:3000/chatinbox', user)
  }

  chatuser(usrl: any, usrc: any) {
    // console.log("auth-chatuser");
    // console.log("usrl:"); console.log(usrl);
    // console.log("usrc:"); console.log(usrc);
    return this.http.get('http://localhost:3000/chatuser/'+ usrl + "/" + usrc);
  }
  blockuser(usrl: any, usrb: any) {
    // console.log("auth-blockuser");
    // console.log("usrl:"); console.log(usrl);
    // console.log("usrb:"); console.log(usrb);
    return this.http.get('http://localhost:3000/blockuser/'+ usrl + "/" + usrb);
  }
  unblockuser(usrl: any, usrb: any) {
    // console.log("auth-blockuser");
    // console.log("usrl:"); console.log(usrl);
    // console.log("usrb:"); console.log(usrb);
    return this.http.get('http://localhost:3000/unblockuser/'+ usrl + "/" + usrb);
  }

  hideuser(usrl: any, usrh: any) {
    // console.log("auth-hideuser");
    // console.log("usrl:"); console.log(usrl);
    // console.log("usrh:"); console.log(usrh);
    return this.http.get('http://localhost:3000/hideuser/'+ usrl + "/" + usrh);
  }

  unhideuser(usrl: any, usrh: any) {
    // console.log("auth-hideuser");
    // console.log("usrl:"); console.log(usrl);
    // console.log("usrh:"); console.log(usrh);
    return this.http.get('http://localhost:3000/unhideuser/'+ usrl + "/" + usrh);
  }

  roomuser(usrl: any, room: any) {
    // console.log("auth-roomuser");
    // console.log("usrl:"); console.log(usrl);
    // console.log("room:"); console.log(room);
    return this.http.get('http://localhost:3000/roomuser/'+ usrl + "/" + room);
  }

getChatRoomsChat(chatRoom: any) {
  return this.http.get('http://localhost:3000/chatroom/' + chatRoom);
}

//-------------------------------------------------------------------------
// save messagep
saveMessage(user: any) {
  return this.http.post<any>(this.messageUrl, user)

}

// get Email Marketing Messages
allMessages(newUser: any) {
  return this.http.get<any>(this.getMessageUrl + newUser.room);
}

}

