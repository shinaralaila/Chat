import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
   public message:any
    socket:any
  usernameAlreadySelected:any;
  user:any

  constructor(private http:HttpClient) {
    
    this.socket = io('http://localhost:3000');
   }
   onUsernameSelection(username:any) {
    this.usernameAlreadySelected = true;
   this. socket.auth = { username };
    this.socket.connect();
  console.log("onUser");console.log(username)}
   
  public sendMessage(message:any) {
    this.socket.emit('new-message', message);
}

public getMessages = () => {
    return Observable.create((observer:any) => {
        this.socket.on('new-message', (message:any) => {
            observer.next(message);
        });
    });
}


public getPvtMsg = () => {
    return Observable.create((observer:any) => {
        this.socket.on('private-message', (message:any) => {
            observer.next(message);
        });
    });
}
}
//----------------------------------------------------------------
/* joinRoom(data:any)
{
    this.socket.emit('join',data);
}


newUserJoined()
  {
      let observable = new Observable<{user:String, message:String}>(observer=>{
          this.socket.on('new user joined', (data)=>{
              observer.next(data);
          });
          return () => {this.socket.disconnect();}
      });

      return observable;
  }

  leaveRoom(data: any){
    this.socket.emit('leave',data);
}

userLeftRoom(){
    let observable = new Observable<{user:String, message:String}>(observer=>{
        this.socket.on('left room', (data)=>{
            observer.next(data);
        });
        return () => {this.socket.disconnect();}
    });

    return observable;
}


newMessageReceived(){
    let observable = new Observable<{user:String, message:String}>(observer=>{
        this.socket.on('room message', (data)=>{
            observer.next(data);
        });
        return () => {this.socket.disconnect();}
    });

    return observable;
} */
//---------------------------------------------------------------------------------------------------------------------------


//private socket = io('http://localhost:3000');
// sendMsg(data:any)
// {
//     this.socket.emit('message',data);
// }

//   joinRoom(data:any) {
//     this.socket.emit('join', data);
//   }
//   newUserJoined() {
//     const observable = new Observable<{user: string, message: string, time: string}>(observer => {
//       this.socket.on('new user joined', (data:any) => {
//         observer.next(data);
//       });
//       return () => {this.socket.disconnect();
//       };
//     });
//     return observable;
//   }
//   leaveRoom(data:any) {
//     this.socket.emit('leave', data);
//   }
//   userLeftRoom() {
//     const observable = new Observable<{user: string, message: string, time: string}>(observer => {
//       this.socket.on('left room', (data:any) => {
//         observer.next(data);
//       });
//       return () => {this.socket.disconnect();
//       };
//     });
//     return observable;
//   }

//   sendMessage(data:any) {
//     this.socket.emit('message', data);
//   }
//   newMessageReceived() {
//     const observable = new Observable<{user: string, message: string, time: string}>(observer => {
//       this.socket.on('new message', (data:any) => {
//         observer.next(data);
//       });
//       return () => {this.socket.disconnect();
//       };
//     });
//     return observable;
//   }
//   typing(data:any) {
//     this.socket.emit('typing', data);
//   }
  
//   // allChat() {
//   //   const observable = new Observable<any>(observer => {
//   //     this.socket.on('chat history', (data:any) => {
//   //       observer.next(data);
//   //     });
//   //     return () => {this.socket.disconnect();
//   //     };
//   //   });
//   //   return observable;
//   // }

//   // New user online
//   newUser(data:any) {
//     this.socket.emit('new user', data);
//   }
  
  
  
//   /* socket.on("connect_error", (err) => {
//     if (err.message === "invalid username") {
//       this.usernameAlreadySelected = false;
//     }
//   }); */




//   // username(user:any){
//   //   this.socket.emit('username',user)
//   // }
//    allOnlineUsers() {
//      const observable = new Observable<any>(observer => {
//       this.socket.on('users', (data:any) => {
//       observer.next(data);
//    });
//     return () => {this.socket.disconnect();
//    };
//   //   });
//   //   return observable;
//    }
// }