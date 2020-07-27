import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mat-list-section',
  templateUrl: './mat-list-section.component.html',
  styleUrls: ['./mat-list-section.component.css']
})
export class MatListSectionComponent implements OnInit {

  @Input() items: string[];

  @Input() title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
