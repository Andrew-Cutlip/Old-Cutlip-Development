import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  title1 : String = "Programming Languages";

  languages : String[] = [
    "Scala",
    "Python",
    "Javascript",
    "C",
    "C++"
  ]

  title2: String = "Other Skills";

  other : String[] = [
    "HTML",
    "CSS",
    "SQL",
    "Git / Github",
    "Terminal / Command line",
    "Data Structures",
    "Runtime Analysis"
  ]

  title3 : String = "Testing and Debugging";

  tests: String[] = [
    "Scalatest for unit testing",
    "GDB for C debugging",
    "Make for unit testing",
    "Chrome / Firefox Dev Tools"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
