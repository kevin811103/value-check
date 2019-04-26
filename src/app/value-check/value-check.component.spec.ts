import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueCheckComponent } from './value-check.component';

describe('ValueCheckComponent', () => {
  let component: ValueCheckComponent;
  let fixture: ComponentFixture<ValueCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
