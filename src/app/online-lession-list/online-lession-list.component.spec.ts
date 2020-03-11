import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineLessionListComponent } from './online-lession-list.component';

describe('OnlineLessionListComponent', () => {
  let component: OnlineLessionListComponent;
  let fixture: ComponentFixture<OnlineLessionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineLessionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineLessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
