import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTurnResumeComponent } from './new-turn-resume.component';

describe('NewTurnResumeComponent', () => {
  let component: NewTurnResumeComponent;
  let fixture: ComponentFixture<NewTurnResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTurnResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTurnResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
