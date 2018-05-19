import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeboxerComponent } from './timeboxer.component';

describe('TimeboxerComponent', () => {
  let component: TimeboxerComponent;
  let fixture: ComponentFixture<TimeboxerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeboxerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeboxerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
