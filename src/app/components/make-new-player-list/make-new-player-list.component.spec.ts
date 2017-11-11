import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeNewPlayerListComponent } from './make-new-player-list.component';

describe('MakeNewPlayerListComponent', () => {
  let component: MakeNewPlayerListComponent;
  let fixture: ComponentFixture<MakeNewPlayerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeNewPlayerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeNewPlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
