import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  month_names=["يناير","فبراير","مارس","إبريل","مايو","يونيه","يوليه","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];
  month_display:number=0;
  year_display:number=0;
  month_lim=[31,28,31,30,31,30,31,31,30,31,30,31];


     curent_date:string="";
  

  now: Date = new Date();

  year: number = this.now.getFullYear();
  month: number = this.now.getMonth() + 1;
  day: number = this.now.getDate();
  ss: number = this.now.getDay();

  current_display_date:string="";

   constructor(){

 this.calender_set_now();

 
 
 this.curent_date=this.month+"/"+this.day+"/"+this.year;

 this.todo_create();

  this.month_display=this.now.getMonth();
  this.year_display=this.now.getFullYear();
  this.current_display_date=this.year_display+" "+this.month_names[this.month_display];

 }

 todo_create(){
  this.todo_list_day = [];
this.i=0;
while(this.i < (this.todo_list_all).length){

  if(this.curent_date==this.todo_list_all[this.i].data){
    this.todo_list_day=this.todo_list_all[this.i].todo_list;
    break;
  }
  
  this.i ++;
}




 }
 

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


if(this.calender_today1_number>this.month_lim[this.month-1]){this.calender_today1_number=this.calender_today1_number-this.month_lim[this.month-1];}
if(this.calender_today2_number>this.month_lim[this.month-1]){this.calender_today2_number=this.calender_today2_number-this.month_lim[this.month-1];}
if(this.calender_today3_number>this.month_lim[this.month-1]){this.calender_today3_number=this.calender_today3_number-this.month_lim[this.month-1];}
if(this.calender_today4_number>this.month_lim[this.month-1]){this.calender_today4_number=this.calender_today4_number-this.month_lim[this.month-1];}
if(this.calender_today5_number>this.month_lim[this.month-1]){this.calender_today5_number=this.calender_today5_number-this.month_lim[this.month-1];}
if(this.calender_today6_number>this.month_lim[this.month-1]){this.calender_today6_number=this.calender_today6_number-this.month_lim[this.month-1];}
if(this.calender_today7_number>this.month_lim[this.month-1]){this.calender_today7_number=this.calender_today7_number-this.month_lim[this.month-1];}

if(this.month-2==-1){
if(this.calender_today1_number<1){this.calender_today1_number=this.month_lim[11]+this.calender_today1_number;}
if(this.calender_today2_number<1){this.calender_today2_number=this.month_lim[11]+this.calender_today2_number;}
if(this.calender_today3_number<1){this.calender_today3_number=this.month_lim[11]+this.calender_today3_number;}
if(this.calender_today4_number<1){this.calender_today4_number=this.month_lim[11]+this.calender_today4_number;}
if(this.calender_today5_number<1){this.calender_today5_number=this.month_lim[11]+this.calender_today5_number;}
if(this.calender_today6_number<1){this.calender_today6_number=this.month_lim[11]+this.calender_today6_number;}
if(this.calender_today7_number<1){this.calender_today7_number=this.month_lim[11]+this.calender_today7_number;}
}else{
if(this.calender_today1_number<1){this.calender_today1_number=this.month_lim[this.month-2]+this.calender_today1_number;}
if(this.calender_today2_number<1){this.calender_today2_number=this.month_lim[this.month-2]+this.calender_today2_number;}
if(this.calender_today3_number<1){this.calender_today3_number=this.month_lim[this.month-2]+this.calender_today3_number;}
if(this.calender_today4_number<1){this.calender_today4_number=this.month_lim[this.month-2]+this.calender_today4_number;}
if(this.calender_today5_number<1){this.calender_today5_number=this.month_lim[this.month-2]+this.calender_today5_number;}
if(this.calender_today6_number<1){this.calender_today6_number=this.month_lim[this.month-2]+this.calender_today6_number;}
if(this.calender_today7_number<1){this.calender_today7_number=this.month_lim[this.month-2]+this.calender_today7_number;}
}



}


calender_today1_text:string="الجمعة";
calender_today2_text:string="الخميس";
calender_today3_text:string="الأربعاء";
calender_today4_text:string="الثلاثاء";
calender_today5_text:string="الإثنين";
calender_today6_text:string="الاحد";
calender_today7_text:string="السبت";














  calender_press1(){
    this.calender_today1_select="#FEEE00"; this.curent_date=this.month+"/"+this.calender_today1_number+"/"+this.year;
    this.calender_today2_select="#ebebeb00";
    this.calender_today3_select="#ebebeb00";
    this.calender_today4_select="#ebebeb00";
    this.calender_today5_select="#ebebeb00";
    this.calender_today6_select="#ebebeb00";
    this.calender_today7_select="#ebebeb00";
     this.todo_create();
   }

     calender_press2(){
    this.calender_today1_select="#ebebeb00";
    this.calender_today2_select="#FEEE00";this.curent_date=this.month+"/"+this.calender_today2_number+"/"+this.year;
    this.calender_today3_select="#ebebeb00";
    this.calender_today4_select="#ebebeb00";
    this.calender_today5_select="#ebebeb00";
    this.calender_today6_select="#ebebeb00";
    this.calender_today7_select="#ebebeb00";
     this.todo_create();
   }

     calender_press3(){
    this.calender_today1_select="#ebebeb00";
    this.calender_today2_select="#ebebeb00";
    this.calender_today3_select="#FEEE00";this.curent_date=this.month+"/"+this.calender_today3_number+"/"+this.year;
    this.calender_today4_select="#ebebeb00";
    this.calender_today5_select="#ebebeb00";
    this.calender_today6_select="#ebebeb00";
    this.calender_today7_select="#ebebeb00";
     this.todo_create();
   }

     calender_press4(){
    this.calender_today1_select="#ebebeb00";
    this.calender_today2_select="#ebebeb00";
    this.calender_today3_select="#ebebeb00";
    this.calender_today4_select="#FEEE00";this.curent_date=this.month+"/"+this.calender_today4_number+"/"+this.year;
    this.calender_today5_select="#ebebeb00";
    this.calender_today6_select="#ebebeb00";
    this.calender_today7_select="#ebebeb00";
     this.todo_create();
   }

     calender_press5(){
    this.calender_today1_select="#ebebeb00";
    this.calender_today2_select="#ebebeb00";
    this.calender_today3_select="#ebebeb00";
    this.calender_today4_select="#ebebeb00";
    this.calender_today5_select="#FEEE00";this.curent_date=this.month+"/"+this.calender_today5_number+"/"+this.year;
    this.calender_today6_select="#ebebeb00";
    this.calender_today7_select="#ebebeb00";
     this.todo_create();
   }

     calender_press6(){
    this.calender_today1_select="#ebebeb00";
    this.calender_today2_select="#ebebeb00";
    this.calender_today3_select="#ebebeb00";
    this.calender_today4_select="#ebebeb00";
    this.calender_today5_select="#ebebeb00";
    this.calender_today6_select="#FEEE00";this.curent_date=this.month+"/"+this.calender_today6_number+"/"+this.year;
    this.calender_today7_select="#ebebeb00";
     this.todo_create();
   }

     calender_press7(){
    this.calender_today1_select="#ebebeb00";
    this.calender_today2_select="#ebebeb00";
    this.calender_today3_select="#ebebeb00";
    this.calender_today4_select="#ebebeb00";
    this.calender_today5_select="#ebebeb00";
    this.calender_today6_select="#ebebeb00";
    this.calender_today7_select="#FEEE00";this.curent_date=this.month+"/"+this.calender_today7_number+"/"+this.year;
     this.todo_create();
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

    if(this.month-1==-1){

         if(this.calender_today1_number>this.month_lim[11]){this.calender_today1_number=this.calender_today1_number-this.month_lim[11];}
    if(this.calender_today2_number>this.month_lim[11]){this.calender_today2_number=this.calender_today2_number-this.month_lim[11];}
    if(this.calender_today3_number>this.month_lim[11]){this.calender_today3_number=this.calender_today3_number-this.month_lim[11];}
    if(this.calender_today4_number>this.month_lim[11]){this.calender_today4_number=this.calender_today4_number-this.month_lim[11];}
    if(this.calender_today5_number>this.month_lim[11]){this.calender_today5_number=this.calender_today5_number-this.month_lim[11];}
    if(this.calender_today6_number>this.month_lim[11]){this.calender_today6_number=this.calender_today6_number-this.month_lim[11];}
    if(this.calender_today7_number>this.month_lim[11]){this.calender_today7_number=this.calender_today7_number-this.month_lim[11];}
   

    }else{
      if(this.calender_today1_number>this.month_lim[this.month-1]){this.calender_today1_number=this.calender_today1_number-this.month_lim[this.month-1];}
    if(this.calender_today2_number>this.month_lim[this.month-1]){this.calender_today2_number=this.calender_today2_number-this.month_lim[this.month-1];}
    if(this.calender_today3_number>this.month_lim[this.month-1]){this.calender_today3_number=this.calender_today3_number-this.month_lim[this.month-1];}
    if(this.calender_today4_number>this.month_lim[this.month-1]){this.calender_today4_number=this.calender_today4_number-this.month_lim[this.month-1];}
    if(this.calender_today5_number>this.month_lim[this.month-1]){this.calender_today5_number=this.calender_today5_number-this.month_lim[this.month-1];}
    if(this.calender_today6_number>this.month_lim[this.month-1]){this.calender_today6_number=this.calender_today6_number-this.month_lim[this.month-1];}
    if(this.calender_today7_number>this.month_lim[this.month-1]){this.calender_today7_number=this.calender_today7_number-this.month_lim[this.month-1];}
   
    }

 
 if(this.calender_today7_number<15 && this.calender_today7_number>7){this.month++;  if(this.month==13){this.month=0;this.year++;}}

  if(this.calender_today7_number>0 && this.calender_today7_number<8){this.month_display++;}
  if(this.month_display==12){this.month_display=0; this.year_display++;}
  this.current_display_date=this.year+" "+this.month_names[this.month_display];

 
  
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



  if(this.month-2==-1){
if(this.calender_today1_number<1){this.calender_today1_number=this.month_lim[11]+this.calender_today1_number;}
if(this.calender_today2_number<1){this.calender_today2_number=this.month_lim[11]+this.calender_today2_number;}
if(this.calender_today3_number<1){this.calender_today3_number=this.month_lim[11]+this.calender_today3_number;}
if(this.calender_today4_number<1){this.calender_today4_number=this.month_lim[11]+this.calender_today4_number;}
if(this.calender_today5_number<1){this.calender_today5_number=this.month_lim[11]+this.calender_today5_number;}
if(this.calender_today6_number<1){this.calender_today6_number=this.month_lim[11]+this.calender_today6_number;}
if(this.calender_today7_number<1){this.calender_today7_number=this.month_lim[11]+this.calender_today7_number;}
}else{
if(this.calender_today1_number<1){this.calender_today1_number=this.month_lim[this.month-1]+this.calender_today1_number;}
if(this.calender_today2_number<1){this.calender_today2_number=this.month_lim[this.month-1]+this.calender_today2_number;}
if(this.calender_today3_number<1){this.calender_today3_number=this.month_lim[this.month-1]+this.calender_today3_number;}
if(this.calender_today4_number<1){this.calender_today4_number=this.month_lim[this.month-1]+this.calender_today4_number;}
if(this.calender_today5_number<1){this.calender_today5_number=this.month_lim[this.month-1]+this.calender_today5_number;}
if(this.calender_today6_number<1){this.calender_today6_number=this.month_lim[this.month-1]+this.calender_today6_number;}
if(this.calender_today7_number<1){this.calender_today7_number=this.month_lim[this.month-1]+this.calender_today7_number;}



}

 if(this.calender_today7_number<15 && this.calender_today7_number>7){this.month--;  if(this.month==-1){this.month=12;this.year--;}}

  if(this.calender_today1_number>0 && this.calender_today1_number<8){this.month_display--;}
  if(this.month_display==-1){this.month_display=11; this.year_display--;}
  this.current_display_date=this.year+" "+this.month_names[this.month_display];

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




//todo list



    todo_list_day=[ {title: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى", time:"05:00 - 06:00 م",name:"محمود الغريب", color_title :"#1C1C28",color_time :"#76778B",color_name :"#000000", back_color: "#F2F5F1",img:"../../assets/Image-35.png",color_clock:"../../assets/clock.png",},
 ];



  i:number=0;


  todo_list_all=[


{
  data:"8/26/2023",todo_list:[
  {title: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى", time:"05:00 - 06:00 م",name:"محمود الغريب", color_title :"#1C1C28",color_time :"#76778B",color_name :"#000000", back_color: "#F2F5F1",img:"../../assets/Image-35.png",color_clock:"../../assets/clock.png",},
  ],
},




{
  data:"8/27/2023",todo_list:[
  {title: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى", time:"05:00 - 06:00 م",name:"محمود الغريب", color_title :"#1C1C28",color_time :"#76778B",color_name :"#000000", back_color: "#F2F5F1",img:"../../assets/Image-35.png",color_clock:"../../assets/clock.png",},
  {title: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى", time:"04:00 - 05:00 م",name:"ميرا محسن", color_title :"#1C1C28",color_time :"#76778B",color_name :"#000000", back_color: "#FFF6E3",img:"../../assets/Image-36.png",color_clock:"../../assets/clock.png",},
  {title: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى", time:"03:00 - 04:00 م",name:"محمود الغريب", color_title :"#FDFDFF",color_time :"#FDFDFF",color_name :"#FDFDFF", back_color: "#7661E2",img:"../../assets/Image-37.png",color_clock:"../../assets/clock_w.png",},
  {title: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى", time:"05:00 - 06:00 م",name:"كريم عبد العزيز", color_title :"#1C1C28",color_time :"#76778B",color_name :"#000000", back_color: "#F1ECFE",img:"../../assets/Image-38.png",color_clock:"../../assets/clock.png",},
  {title: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى", time:"05:00 - 06:00 م",name:"محمود الغريب", color_title :"#1C1C28",color_time :"#76778B",color_name :"#000000", back_color: "#F2F5F1",img:"../../assets/Image-35.png",color_clock:"../../assets/clock.png",},
  ],
},

{
  data:"8/29/2023",todo_list:[
  {title: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى", time:"05:00 - 06:00 م",name:"محمود الغريب", color_title :"#1C1C28",color_time :"#76778B",color_name :"#000000", back_color: "#F2F5F1",img:"../../assets/Image-35.png",color_clock:"../../assets/clock.png",},
  {title: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى", time:"04:00 - 05:00 م",name:"ميرا محسن", color_title :"#1C1C28",color_time :"#76778B",color_name :"#000000", back_color: "#FFF6E3",img:"../../assets/Image-36.png",color_clock:"../../assets/clock.png",},
 ],
},



{
  data:"8/30/2023",todo_list:[
  {title: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى", time:"05:00 - 06:00 م",name:"محمود الغريب", color_title :"#1C1C28",color_time :"#76778B",color_name :"#000000", back_color: "#F2F5F1",img:"../../assets/Image-35.png",color_clock:"../../assets/clock.png",},
  {title: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى", time:"04:00 - 05:00 م",name:"ميرا محسن", color_title :"#1C1C28",color_time :"#76778B",color_name :"#000000", back_color: "#FFF6E3",img:"../../assets/Image-36.png",color_clock:"../../assets/clock.png",},
  {title: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى", time:"03:00 - 04:00 م",name:"محمود الغريب", color_title :"#FDFDFF",color_time :"#FDFDFF",color_name :"#FDFDFF", back_color: "#7661E2",img:"../../assets/Image-37.png",color_clock:"../../assets/clock_w.png",},
  ],
},



{
  data:"9/1/2023",todo_list:[
  {title: "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى", time:"05:00 - 06:00 م",name:"محمود الغريب", color_title :"#1C1C28",color_time :"#76778B",color_name :"#000000", back_color: "#F2F5F1",img:"../../assets/Image-35.png",color_clock:"../../assets/clock.png",},
],
},




  ];

   

}
