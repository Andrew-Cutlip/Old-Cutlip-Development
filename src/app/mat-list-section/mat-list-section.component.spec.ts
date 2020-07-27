import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatListSectionComponent } from './mat-list-section.component';

describe('MatListSectionComponent', () => {
  let component: MatListSectionComponent;
  let fixture: ComponentFixture<MatListSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatListSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
