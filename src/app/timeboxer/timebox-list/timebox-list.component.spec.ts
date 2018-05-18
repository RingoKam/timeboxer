import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeboxListComponent } from './timebox-list.component';

describe('TimeboxListComponent', () => {
  let component: TimeboxListComponent;
  let fixture: ComponentFixture<TimeboxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeboxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
