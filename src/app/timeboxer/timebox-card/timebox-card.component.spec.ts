import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeboxCardComponent } from './timebox-card.component';

describe('TimeboxCardComponent', () => {
  let component: TimeboxCardComponent;
  let fixture: ComponentFixture<TimeboxCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeboxCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeboxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
