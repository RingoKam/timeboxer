import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeboxNewComponent } from './timebox-new.component';

describe('TimeboxNewComponent', () => {
  let component: TimeboxNewComponent;
  let fixture: ComponentFixture<TimeboxNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeboxNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeboxNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
