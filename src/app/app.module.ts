import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatinboxComponent } from './chatinbox/chatinbox.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { UsernameComponent } from './username/username.component';
import { BlockedusersComponent } from './blockedusers/blockedusers.component';
import { HiddenusersComponent } from './hiddenusers/hiddenusers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ChatComponent,
    MessageComponent,
    UsersComponent,
    NavbarComponent,
    ChatinboxComponent,
    ChatroomComponent,
    UsernameComponent,
    BlockedusersComponent,
    HiddenusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
