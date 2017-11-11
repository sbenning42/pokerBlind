import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToWelcomeComponent } from './back-to-welcome.component';

describe('BackToWelcomeComponent', () => {
  let component: BackToWelcomeComponent;
  let fixture: ComponentFixture<BackToWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackToWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
