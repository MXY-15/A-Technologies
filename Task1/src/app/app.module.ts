import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { Panel1Component } from './panel1/panel1.component';
import { Panel2Component } from './panel2/panel2.component';
import { Profile1Component } from './profile1/profile1.component';
import { Profile2Component } from './profile2/profile2.component';
import { Profile3Component } from './profile3/profile3.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TodoComponent } from './todo/todo.component';
import { EmailsComponent } from './emails/emails.component';
import { Panel3Component } from './panel3/panel3.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavComponent,
    ProfileComponent,
    Panel1Component,
    Panel2Component,
    Profile1Component,
    Profile2Component,
    Profile3Component,
    CalendarComponent,
    TodoComponent,
    EmailsComponent,
    Panel3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
