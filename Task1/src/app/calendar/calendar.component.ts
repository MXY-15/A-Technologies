import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  

  now: Date = new Date();

  year: number = this.now.getFullYear();
  month: number = this.now.getMonth() + 1;
  day: number = this.now.getDate();
  ss: number = this.now.getDay();
 

calender_today1_number:number=0;
calender_today2_number:number=0;
calender_today3_number:number=0;
calender_today4_number:number=0;
calender_today5_number:number=0;
calender_today6_number:number=0;
calender_today7_number:number=0;

calender_today1_number_color:string="#292D32";
calender_today2_number_color:string="#292D32";
calender_today3_number_color:string="#292D32";
calender_today4_number_color:string="#292D32";
calender_today5_number_color:string="#292D32";
calender_today6_number_color:string="#292D32";
calender_today7_number_color:string="#292D32";

calender_today1_circle:string="#ebebeb00";
calender_today2_circle:string="#ebebeb00";
calender_today3_circle:string="#ebebeb00";
calender_today4_circle:string="#ebebeb00";
calender_today5_circle:string="#ebebeb00";
calender_today6_circle:string="#ebebeb00";
calender_today7_circle:string="#ebebeb00";

calender_today1_select:string="#ebebeb00";
calender_today2_select:string="#ebebeb00";
calender_today3_select:string="#ebebeb00";
calender_today4_select:string="#ebebeb00";
calender_today5_select:string="#ebebeb00";
calender_today6_select:string="#ebebeb00";
calender_today7_select:string="#ebebeb00";

calender_today1_text_color:string="#B4B4B4";
calender_today2_text_color:string="#B4B4B4";
calender_today3_text_color:string="#B4B4B4";
calender_today4_text_color:string="#B4B4B4";
calender_today5_text_color:string="#B4B4B4";
calender_today6_text_color:string="#B4B4B4";
calender_today7_text_color:string="#B4B4B4";

 


calender_set_now(){
if(this.ss==0){
this.calender_today1_number=this.day+5;this.calender_today1_number_color="#292D32";this.calender_today1_circle="#ebebeb00";this.calender_today1_select="#ebebeb00";this.calender_today1_text_color="#B4B4B4";
this.calender_today2_number=this.day+4;this.calender_today2_number_color="#292D32";this.calender_today2_circle="#ebebeb00";this.calender_today2_select="#ebebeb00";this.calender_today2_text_color="#B4B4B4";
this.calender_today3_number=this.day+3;this.calender_today3_number_color="#292D32";this.calender_today3_circle="#ebebeb00";this.calender_today3_select="#ebebeb00";this.calender_today3_text_color="#B4B4B4";
this.calender_today4_number=this.day+2;this.calender_today4_number_color="#292D32";this.calender_today4_circle="#ebebeb00";this.calender_today4_select="#ebebeb00";this.calender_today4_text_color="#B4B4B4";
this.calender_today5_number=this.day+1;this.calender_today5_number_color="#292D32";this.calender_today5_circle="#ebebeb00";this.calender_today5_select="#ebebeb00";this.calender_today5_text_color="#B4B4B4";
this.calender_today6_number=this.day;  this.calender_today6_number_color="#FFFFFF";this.calender_today6_circle="#292D32";  this.calender_today6_select="#FEEE00";  this.calender_today6_text_color="#292D32";
this.calender_today7_number=this.day-1;this.calender_today7_number_color="#292D32";this.calender_today7_circle="#ebebeb00";this.calender_today7_select="#ebebeb00";this.calender_today7_text_color="#B4B4B4";
}else 
if(this.ss==1){
this.calender_today1_number=this.day+4;this.calender_today1_number_color="#292D32";this.calender_today1_circle="#ebebeb00";this.calender_today1_select="#ebebeb00";this.calender_today1_text_color="#B4B4B4";
this.calender_today2_number=this.day+3;this.calender_today2_number_color="#292D32";this.calender_today2_circle="#ebebeb00";this.calender_today2_select="#ebebeb00";this.calender_today2_text_color="#B4B4B4";
this.calender_today3_number=this.day+2;this.calender_today3_number_color="#292D32";this.calender_today3_circle="#ebebeb00";this.calender_today3_select="#ebebeb00";this.calender_today3_text_color="#B4B4B4";
this.calender_today4_number=this.day+1;this.calender_today4_number_color="#292D32";this.calender_today4_circle="#ebebeb00";this.calender_today4_select="#ebebeb00";this.calender_today4_text_color="#B4B4B4";
this.calender_today5_number=this.day;  this.calender_today5_number_color="#FFFFFF";this.calender_today5_circle="#292D32";  this.calender_today5_select="#FEEE00";  this.calender_today5_text_color="#292D32";
this.calender_today6_number=this.day-1;this.calender_today6_number_color="#292D32";this.calender_today6_circle="#ebebeb00";this.calender_today6_select="#ebebeb00";this.calender_today6_text_color="#B4B4B4";
this.calender_today7_number=this.day-2;this.calender_today7_number_color="#292D32";this.calender_today7_circle="#ebebeb00";this.calender_today7_select="#ebebeb00";this.calender_today7_text_color="#B4B4B4";
}else 
if(this.ss==2){
this.calender_today1_number=this.day+3;this.calender_today1_number_color="#292D32";this.calender_today1_circle="#ebebeb00";this.calender_today1_select="#ebebeb00";this.calender_today1_text_color="#B4B4B4";
this.calender_today2_number=this.day+2;this.calender_today2_number_color="#292D32";this.calender_today2_circle="#ebebeb00";this.calender_today2_select="#ebebeb00";this.calender_today2_text_color="#B4B4B4";
this.calender_today3_number=this.day+1;this.calender_today3_number_color="#292D32";this.calender_today3_circle="#ebebeb00";this.calender_today3_select="#ebebeb00";this.calender_today3_text_color="#B4B4B4";
this.calender_today4_number=this.day;  this.calender_today4_number_color="#FFFFFF";this.calender_today4_circle="#292D32";  this.calender_today4_select="#FEEE00";  this.calender_today4_text_color="#292D32";
this.calender_today5_number=this.day-1;this.calender_today5_number_color="#292D32";this.calender_today5_circle="#ebebeb00";this.calender_today5_select="#ebebeb00";this.calender_today5_text_color="#B4B4B4";
this.calender_today6_number=this.day-2;this.calender_today6_number_color="#292D32";this.calender_today6_circle="#ebebeb00";this.calender_today6_select="#ebebeb00";this.calender_today6_text_color="#B4B4B4";
this.calender_today7_number=this.day-3;this.calender_today7_number_color="#292D32";this.calender_today7_circle="#ebebeb00";this.calender_today7_select="#ebebeb00";this.calender_today7_text_color="#B4B4B4";
}else 
if(this.ss==3){
this.calender_today1_number=this.day+2;this.calender_today1_number_color="#292D32";this.calender_today1_circle="#ebebeb00";this.calender_today1_select="#ebebeb00";this.calender_today1_text_color="#B4B4B4";
this.calender_today2_number=this.day+1;this.calender_today2_number_color="#292D32";this.calender_today2_circle="#ebebeb00";this.calender_today2_select="#ebebeb00";this.calender_today2_text_color="#B4B4B4";
this.calender_today3_number=this.day;  this.calender_today3_number_color="#FFFFFF";this.calender_today3_circle="#292D32";  this.calender_today3_select="#FEEE00";  this.calender_today3_text_color="#292D32";
this.calender_today4_number=this.day-1;this.calender_today4_number_color="#292D32";this.calender_today4_circle="#ebebeb00";this.calender_today4_select="#ebebeb00";this.calender_today4_text_color="#B4B4B4";
this.calender_today5_number=this.day-2;this.calender_today5_number_color="#292D32";this.calender_today5_circle="#ebebeb00";this.calender_today5_select="#ebebeb00";this.calender_today5_text_color="#B4B4B4";
this.calender_today6_number=this.day-3;this.calender_today6_number_color="#292D32";this.calender_today6_circle="#ebebeb00";this.calender_today6_select="#ebebeb00";this.calender_today6_text_color="#B4B4B4";
this.calender_today7_number=this.day-4;this.calender_today7_number_color="#292D32";this.calender_today7_circle="#ebebeb00";this.calender_today7_select="#ebebeb00";this.calender_today7_text_color="#B4B4B4";
}else 
if(this.ss==4){
this.calender_today1_number=this.day+1;this.calender_today1_number_color="#292D32";this.calender_today1_circle="#ebebeb00";this.calender_today1_select="#ebebeb00";this.calender_today1_text_color="#B4B4B4";
this.calender_today2_number=this.day;  this.calender_today2_number_color="#FFFFFF";this.calender_today2_circle="#292D32";  this.calender_today2_select="#FEEE00";  this.calender_today2_text_color="#292D32";
this.calender_today3_number=this.day-1;this.calender_today3_number_color="#292D32";this.calender_today3_circle="#ebebeb00";this.calender_today3_select="#ebebeb00";this.calender_today3_text_color="#B4B4B4";
this.calender_today4_number=this.day-2;this.calender_today4_number_color="#292D32";this.calender_today4_circle="#ebebeb00";this.calender_today4_select="#ebebeb00";this.calender_today4_text_color="#B4B4B4";
this.calender_today5_number=this.day-3;this.calender_today5_number_color="#292D32";this.calender_today5_circle="#ebebeb00";this.calender_today5_select="#ebebeb00";this.calender_today5_text_color="#B4B4B4";
this.calender_today6_number=this.day-4;this.calender_today6_number_color="#292D32";this.calender_today6_circle="#ebebeb00";this.calender_today6_select="#ebebeb00";this.calender_today6_text_color="#B4B4B4";
this.calender_today7_number=this.day-5;this.calender_today7_number_color="#292D32";this.calender_today7_circle="#ebebeb00";this.calender_today7_select="#ebebeb00";this.calender_today7_text_color="#B4B4B4";
}else 
if(this.ss==5){
this.calender_today1_number=this.day;  this.calender_today1_number_color="#FFFFFF";this.calender_today1_circle="#292D32";  this.calender_today1_select="#FEEE00";  this.calender_today1_text_color="#292D32";
this.calender_today2_number=this.day-1;this.calender_today2_number_color="#292D32";this.calender_today2_circle="#ebebeb00";this.calender_today2_select="#ebebeb00";this.calender_today2_text_color="#B4B4B4";
this.calender_today3_number=this.day-2;this.calender_today3_number_color="#292D32";this.calender_today3_circle="#ebebeb00";this.calender_today3_select="#ebebeb00";this.calender_today3_text_color="#B4B4B4";
this.calender_today4_number=this.day-3;this.calender_today4_number_color="#292D32";this.calender_today4_circle="#ebebeb00";this.calender_today4_select="#ebebeb00";this.calender_today4_text_color="#B4B4B4";
this.calender_today5_number=this.day-4;this.calender_today5_number_color="#292D32";this.calender_today5_circle="#ebebeb00";this.calender_today5_select="#ebebeb00";this.calender_today5_text_color="#B4B4B4";
this.calender_today6_number=this.day-5;this.calender_today6_number_color="#292D32";this.calender_today6_circle="#ebebeb00";this.calender_today6_select="#ebebeb00";this.calender_today6_text_color="#B4B4B4";
this.calender_today7_number=this.day-6;this.calender_today7_number_color="#292D32";this.calender_today7_circle="#ebebeb00";this.calender_today7_select="#ebebeb00";this.calender_today7_text_color="#B4B4B4";
}else 
if(this.ss==6){
this.calender_today1_number=this.day+6;this.calender_today1_number_color="#292D32";this.calender_today1_circle="#ebebeb00";this.calender_today1_select="#ebebeb00";this.calender_today1_text_color="#B4B4B4";
this.calender_today2_number=this.day+5;this.calender_today2_number_color="#292D32";this.calender_today2_circle="#ebebeb00";this.calender_today2_select="#ebebeb00";this.calender_today2_text_color="#B4B4B4";
this.calender_today3_number=this.day+4;this.calender_today3_number_color="#292D32";this.calender_today3_circle="#ebebeb00";this.calender_today3_select="#ebebeb00";this.calender_today3_text_color="#B4B4B4";
this.calender_today4_number=this.day+3;this.calender_today4_number_color="#292D32";this.calender_today4_circle="#ebebeb00";this.calender_today4_select="#ebebeb00";this.calender_today4_text_color="#B4B4B4";
this.calender_today5_number=this.day+2;this.calender_today5_number_color="#292D32";this.calender_today5_circle="#ebebeb00";this.calender_today5_select="#ebebeb00";this.calender_today5_text_color="#B4B4B4";
this.calender_today6_number=this.day+1;this.calender_today6_number_color="#292D32";this.calender_today6_circle="#ebebeb00";this.calender_today6_select="#ebebeb00";this.calender_today6_text_color="#B4B4B4";
this.calender_today7_number=this.day;  this.calender_today7_number_color="#FFFFFF";this.calender_today7_circle="#292D32";  this.calender_today7_select="#FEEE00";  this.calender_today7_text_color="#292D32";
}
}

 
 this.calender_set_now();


calender_today1_text:string="الجمعة";
calender_today2_text:string="الخميس";
calender_today3_text:string="الأربعاء";
calender_today4_text:string="الثلاثاء";
calender_today5_text:string="الإثنين";
calender_today6_text:string="الاحد";
calender_today7_text:string="السبت";














  calender_press1(){
    this.calender_today1_select="#FEEE00";
    this.calender_today2_select="#ebebeb00";
    this.calender_today3_select="#ebebeb00";
    this.calender_today4_select="#ebebeb00";
    this.calender_today5_select="#ebebeb00";
    this.calender_today6_select="#ebebeb00";
    this.calender_today7_select="#ebebeb00";
   }

     calender_press2(){
    this.calender_today1_select="#ebebeb00";
    this.calender_today2_select="#FEEE00";
    this.calender_today3_select="#ebebeb00";
    this.calender_today4_select="#ebebeb00";
    this.calender_today5_select="#ebebeb00";
    this.calender_today6_select="#ebebeb00";
    this.calender_today7_select="#ebebeb00";
   }

     calender_press3(){
    this.calender_today1_select="#ebebeb00";
    this.calender_today2_select="#ebebeb00";
    this.calender_today3_select="#FEEE00";
    this.calender_today4_select="#ebebeb00";
    this.calender_today5_select="#ebebeb00";
    this.calender_today6_select="#ebebeb00";
    this.calender_today7_select="#ebebeb00";
   }

     calender_press4(){
    this.calender_today1_select="#ebebeb00";
    this.calender_today2_select="#ebebeb00";
    this.calender_today3_select="#ebebeb00";
    this.calender_today4_select="#FEEE00";
    this.calender_today5_select="#ebebeb00";
    this.calender_today6_select="#ebebeb00";
    this.calender_today7_select="#ebebeb00";
   }

     calender_press5(){
    this.calender_today1_select="#ebebeb00";
    this.calender_today2_select="#ebebeb00";
    this.calender_today3_select="#ebebeb00";
    this.calender_today4_select="#ebebeb00";
    this.calender_today5_select="#FEEE00";
    this.calender_today6_select="#ebebeb00";
    this.calender_today7_select="#ebebeb00";
   }

     calender_press6(){
    this.calender_today1_select="#ebebeb00";
    this.calender_today2_select="#ebebeb00";
    this.calender_today3_select="#ebebeb00";
    this.calender_today4_select="#ebebeb00";
    this.calender_today5_select="#ebebeb00";
    this.calender_today6_select="#FEEE00";
    this.calender_today7_select="#ebebeb00";
   }

     calender_press7(){
    this.calender_today1_select="#ebebeb00";
    this.calender_today2_select="#ebebeb00";
    this.calender_today3_select="#ebebeb00";
    this.calender_today4_select="#ebebeb00";
    this.calender_today5_select="#ebebeb00";
    this.calender_today6_select="#ebebeb00";
    this.calender_today7_select="#FEEE00";
   }

       calender_week_p(){
    this.calender_today1_select="#ebebeb00";
    this.calender_today2_select="#ebebeb00";
    this.calender_today3_select="#ebebeb00";
    this.calender_today4_select="#ebebeb00";
    this.calender_today5_select="#ebebeb00";
    this.calender_today6_select="#ebebeb00";
    this.calender_today7_select="#ebebeb00";

    this.calender_today1_number=this.calender_today1_number+7;
    this.calender_today2_number=this.calender_today2_number+7;
    this.calender_today3_number=this.calender_today3_number+7;
    this.calender_today4_number=this.calender_today4_number+7;
    this.calender_today5_number=this.calender_today5_number+7;
    this.calender_today6_number=this.calender_today6_number+7;
    this.calender_today7_number=this.calender_today7_number+7;

    if(this.calender_today1_number>30){this.calender_today1_number=this.calender_today1_number-30;}
    if(this.calender_today2_number>30){this.calender_today2_number=this.calender_today2_number-30;}
    if(this.calender_today3_number>30){this.calender_today3_number=this.calender_today3_number-30;}
    if(this.calender_today4_number>30){this.calender_today4_number=this.calender_today4_number-30;}
    if(this.calender_today5_number>30){this.calender_today5_number=this.calender_today5_number-30;}
    if(this.calender_today6_number>30){this.calender_today6_number=this.calender_today6_number-30;}
    if(this.calender_today7_number>30){this.calender_today7_number=this.calender_today7_number-30;}
   }

      calender_week_m(){
    this.calender_today1_select="#ebebeb00";
    this.calender_today2_select="#ebebeb00";
    this.calender_today3_select="#ebebeb00";
    this.calender_today4_select="#ebebeb00";
    this.calender_today5_select="#ebebeb00";
    this.calender_today6_select="#ebebeb00";
    this.calender_today7_select="#ebebeb00";

   this.calender_today1_number=this.calender_today1_number-7;
    this.calender_today2_number=this.calender_today2_number-7;
    this.calender_today3_number=this.calender_today3_number-7;
    this.calender_today4_number=this.calender_today4_number-7;
    this.calender_today5_number=this.calender_today5_number-7;
    this.calender_today6_number=this.calender_today6_number-7;
    this.calender_today7_number=this.calender_today7_number-7;

    if(this.calender_today1_number<1){this.calender_today1_number=30+this.calender_today1_number;}
    if(this.calender_today2_number<1){this.calender_today2_number=30+this.calender_today2_number;}
    if(this.calender_today3_number<1){this.calender_today3_number=30+this.calender_today3_number;}
    if(this.calender_today4_number<1){this.calender_today4_number=30+this.calender_today4_number;}
    if(this.calender_today5_number<1){this.calender_today5_number=30+this.calender_today5_number;}
    if(this.calender_today6_number<1){this.calender_today6_number=30+this.calender_today6_number;}
    if(this.calender_today7_number<1){this.calender_today7_number=30+this.calender_today7_number;}

    this.calender_today1_circle="#ebebeb00";
    this.calender_today2_circle="#ebebeb00";
    this.calender_today3_circle="#ebebeb00";
    this.calender_today4_circle="#ebebeb00";
    this.calender_today5_circle="#ebebeb00";
    this.calender_today6_circle="#ebebeb00";
    this.calender_today7_circle="#ebebeb00";

 this.calender_today1_text_color="#B4B4B4";
 this.calender_today2_text_color="#B4B4B4";
 this.calender_today3_text_color="#B4B4B4";
 this.calender_today4_text_color="#B4B4B4";
 this.calender_today5_text_color="#B4B4B4";
 this.calender_today6_text_color="#B4B4B4";
 this.calender_today7_text_color="#B4B4B4";

 this.calender_today1_number_color="#292D32";
 this.calender_today2_number_color="#292D32";
 this.calender_today3_number_color="#292D32";
 this.calender_today4_number_color="#292D32";
 this.calender_today5_number_color="#292D32";
 this.calender_today6_number_color="#292D32";
 this.calender_today7_number_color="#292D32";

   }

   

}
