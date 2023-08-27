import { Component } from '@angular/core';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent {

  page1_back_color:string="#0771DE";
  page2_back_color:string="#00000000";
  page3_back_color:string="#00000000";
  page4_back_color:string="#00000000";
  page5_back_color:string="#00000000";

  page1_text_color:string="#FFFFFF";
  page2_text_color:string="#7E8299";
  page3_text_color:string="#7E8299";
  page4_text_color:string="#7E8299";
  page5_text_color:string="#7E8299";

  page1_text:number=1;
  page2_text:number=2;
  page3_text:number=3;
  page4_text:number=4;
  page5_text:number=5;

  counter:number=1;

   emails_page_1(){this.counter=1;this.emails_page_move();}
   emails_page_2(){this.counter=2;this.emails_page_move();}
   emails_page_3(){this.counter=3;this.emails_page_move();}
   emails_page_4(){this.counter=4;this.emails_page_move();}
   emails_page_5(){this.counter=5;this.emails_page_move();}


    emails_page_move(){

       this.page1_back_color="#00000000";
       this.page2_back_color="#00000000";
       this.page3_back_color="#00000000";
       this.page4_back_color="#00000000";
       this.page5_back_color="#00000000";
       this.page1_text_color="#7E8299";
       this.page2_text_color="#7E8299";
       this.page3_text_color="#7E8299";
       this.page4_text_color="#7E8299";
       this.page5_text_color="#7E8299";

if(this.counter==1){this.page1_back_color="#0771DE"; this.page1_text_color="#FFFFFF";}
else if(this.counter==2){this.page2_back_color="#0771DE";   this.page2_text_color="#FFFFFF";}
else if(this.counter==3){this.page3_back_color="#0771DE";  this.page3_text_color="#FFFFFF";}
else if(this.counter==4){this.page4_back_color="#0771DE";    this.page4_text_color="#FFFFFF";}
else if(this.counter==5){this.page5_back_color="#0771DE"; this.page5_text_color="#FFFFFF";}
   }

     emails_page_p(){
this.page1_text=this.page1_text+5;
this.page2_text=this.page2_text+5;
this.page3_text=this.page3_text+5;
this.page4_text=this.page4_text+5;
this.page5_text=this.page5_text+5;
      }

      emails_page_m(){
        if(this.page1_text-5>0){
this.page1_text=this.page1_text-5;
this.page2_text=this.page2_text-5;
this.page3_text=this.page3_text-5;
this.page4_text=this.page4_text-5;
this.page5_text=this.page5_text-5;
        }

     }
  
   }

