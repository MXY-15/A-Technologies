import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task1';

  name:string='';
  hovercolor!:string;

  imagephoto:string="../assets/download.jpeg";

  somerandomfunction(event:any){
    alert(event.target.value)
  }
}
