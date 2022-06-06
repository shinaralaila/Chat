import { ChatinboxComponent } from './chatinbox/chatinbox.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { UsersComponent } from './users/users.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { UsernameComponent } from './username/username.component';
import { HiddenusersComponent } from './hiddenusers/hiddenusers.component';
import { BlockedusersComponent } from './blockedusers/blockedusers.component';

const routes: Routes = [{path:'',component:HomeComponent},
                        {path:'home',component:HomeComponent},

                        {path:'register',component:RegisterComponent},
                        {path:'chat',component:ChatComponent},
                        {path:'message',component:MessageComponent},
                        {path:'users',component:UsersComponent},
                        {path:'chatinbox',component:ChatinboxComponent},
                        {path:'chatroom',component:ChatroomComponent},
                        {path:'username',component:UsernameComponent},
                        {path:'hidden',component:HiddenusersComponent},
                        {path:'blocked',component:BlockedusersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
