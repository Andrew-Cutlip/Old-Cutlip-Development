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
    "title": "Genetic Algorithm",
    "content": [
      "Language: Scala",
      "Implements a generic genetic algorithm that can solve problems such as linear/polynomial regression. It generates random solutions, sorts them by how fit they are, keeps the best ones letting them redproduce with some randomness, all until a solution close to ideal is produced.",
    ]
  }

  obj6 = {
    "title": "MMO Pathfinding",
    "content": [
      "Language: Scala",
      "Uses breath-first search to navigate a graph/map produced from JSON. Navigates the grid from starting point to clicked position on the GUI avoiding obstacles in the shortest path.",
    ]
  }

  obj7 = {
    "title": "MMO Project",
    "content": [
      "Languages: Scala, HTML, CSS, Javascript",
      "Semester long project that creates a simple MMO game that uses MVC architecture. It demonstrates inheritance and other Object Orientated principles with rpg characters with classes. Uses websockets to communicate between web / gui client and the server. The server utilizes actors to communicate between the different systems. Handles battles between multiple parties and displays animations and interaction between multiple clients.",
    ]
  }

  sys1 = {
    "title": "Conway's Game of Life",
    "content": [
      "Language: C",
      "Implements Conway's Game of Life in a simple command line interface. Can be animated or jump to a certain generation. Works by creating and printing the grid in a two dimensional matrix.",
    ]
  }

  sys2 = {
    "title": "Priority Queue:",
    "content": [
      "Language: C",
      "Implements a priority queue data structure in c using structs and pointers.",
    ]
  }

  sys3 = {
    "title": "Instant Messenger",
    "content": [
      "Language: C",
      "Packs and unpacks different packet types that are used in instant messenger between clients and a server. Uses void pointers to pack data making use of stride and pointer arithmetic.",
    ]
  }

  sys4 = {
    "title": "Malloc",
    "content": [
      "Language: C",
      "Reimplements the malloc system call. Breaks up memory when needed using sbrk calls then adds split up chunks and adds them to a table of free lists that points to free blocks of memory of each size. When allocated free blocks are removed and the next block becomes the head. Uses bit flags in the size of the block to indicate if the block is free and it is masked when needed.",
    ]
  }

  sys5 = {
    "title": "Producer Consumer Queue",
    "content": [
      "Language: C",
      "Reimplements semaphores using mutexes and condition variables for synchronization with threads. These semaphores are used to create a pcq data structure that creates a queue that allows for synchroniztion in insertion, removal, and destruction of the queue.",
    ]
  }

  bill = [
    "Languages: Java, XML",
    "Platfrom: Android",
    "Basic bill splitter app that calculates how much each person should pay for a bill including tip options."
  ]

  projects = [
    this.obj1,
    this.obj2,
    this.obj3,
    this.obj4,
    this.obj5,
    this.obj6,
    this.obj7,
  ];

  systems = [
    this.sys1,
    this.sys2,
    this.sys3,
    this.sys4,
    this.sys5,
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
