import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  title1: string = "Shunting Yard algorithm Implementation:";

  content1: string[] = [
    "Language: Scala",
    "Takes an expression as a string in infix notation and converts it to reverse polish notation then evaluates it.",
  ]

  obj1 = {
    "title": this.title1,
    "content": this.content1,
  }

  title2: string = "Physics Engine:";

  content2: string[] = [
    "Language: Scala",
    "Uses object-orientated programming to create a physics engine that models movement and collisions that could workin a simple game."
  ]

  obj2 = {
    "title": this.title2,
    "content": this.content2,
  }

  title3: string = "Calculator:";

  content3: string[] = [
    "Language: Scala",
    "Uses a GUI and state design pattern to make a simple calculator that doesn't use any control flow. Reacts to button presses to perform arithmetic.",

  ]

  obj3 = {
    "title": this.title3,
    "content": this.content3,
  }

  obj4 = {
    "title": "Clicker",
    "content": [
      "Language: Scala",
      "A simple clicker game create with a gui, akka actors, and websockets to allow different instances of desktop/webapps to a server that responds to events. It stores user info in a SQL database",
    ]
  }

  obj5 = {

  }

  projects = [
    this.obj1,
    this.obj2,
    this.obj3,
    this.obj4,

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
