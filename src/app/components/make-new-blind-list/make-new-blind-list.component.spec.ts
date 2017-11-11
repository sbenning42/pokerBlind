import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeNewBlindListComponent } from './make-new-blind-list.component';

describe('MakeNewBlindListComponent', () => {
  let component: MakeNewBlindListComponent;
  let fixture: ComponentFixture<MakeNewBlindListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeNewBlindListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeNewBlindListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
