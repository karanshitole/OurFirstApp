import { Component } from '@angular/core';
import { Istudent } from './modules/student';
import { Iplayer } from './modules/player';
import { Ibook } from './modules/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OurFirstApp';
  strArr: Array<string>=["HTML","JS","TS","Angular","Bootstrap"]

  student:Array<Istudent>=[
    {
      fname:"karan",
      lname:"shitole",
      email:"shitolekaran11@gmail.com",
      age:26,
      contact:9049826265,
      city:"Jalna"
    },
    {
      fname:"Aaru",
      lname:"shitole",
      email:"shitoleaaru08@gmail.com",
      age:5,
      contact:9049826265,
      city:"Jalna"
    },
    {
      fname:"sakshi",
      lname:"shitole",
      email:"shitolesakshi09@gmail.com",
      age:9,
      contact:9049826265,
      city:"Jalna"
    },
    {
      fname:"Bhakti",
      lname:"shitole",
      email:"shitolebhakti22@gmail.com",
      age:26,
      contact:9049826265,
      city:"Jalna"
    }
  ]

  playerName: Array<string>=["Sachin","MS dhoni","Virat ","Rohit","Rahul"];

  plyar:Array<Iplayer>=[
    {
      fname:"Rohit",
      lname:"sharma",
      email:"rohitsharma45@gmail.com",
      age:35,
      city:"Mumbai"
    },
    {
      fname:"Ms",
      lname:"Dhobi",
      email:"msdhoni07@gmail.com",
      age:39,
      city:"Rachi"
    },
    {
      fname:"Rahul",
      lname:"lokesh",
      email:"rahullokesh01@gmail.com",
      age:30,
      city:"Mumbai"
    },
    {
      fname:"Sachin",
      lname:"Tedulkar",
      email:"schintedulkar10@gmail.com",
      age:49,
      city:"Munbai"
    }
  ]
  bookArr:Array<string>=["Stranger","Dreamcatcher","Beloved","Nine","Jazz"];

  bookName:Array<Ibook>=[
    {
      Book_Title :"Stranger",
    Publisher:"Vintage",
    Auother:"Camus",
    },
     {
      Book_Title :"Beloved",
    Publisher:"Scribner",
    Auother:"Morrison",
    },
    {
      Book_Title :"Dreamcatcher",
    Publisher:"Scibner",
    Auother:"King",
    }
    ,
     {
    Book_Title :"Nine",
    Publisher:"LB Books",
    Auother:"Salinger",
    }
  ]

}
