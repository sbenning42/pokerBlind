import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlayersResumeComponent } from './new-players-resume.component';

describe('NewPlayersResumeComponent', () => {
  let component: NewPlayersResumeComponent;
  let fixture: ComponentFixture<NewPlayersResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlayersResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlayersResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
