import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  name:string="Mahmoud";
  name1:string="Mahmoud";

  add(){
    this.name =this.name1;

  }

  

}
