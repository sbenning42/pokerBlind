import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextTurnComponent } from './next-turn.component';

describe('NextTurnComponent', () => {
  let component: NextTurnComponent;
  let fixture: ComponentFixture<NextTurnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextTurnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
