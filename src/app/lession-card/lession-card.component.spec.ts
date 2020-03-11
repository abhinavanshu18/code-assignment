import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessionCardComponent } from './lession-card.component';

describe('LessionCardComponent', () => {
  let component: LessionCardComponent;
  let fixture: ComponentFixture<LessionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
