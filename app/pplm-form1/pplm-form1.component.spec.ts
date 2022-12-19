import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PplmForm1Component } from './pplm-form1.component';

describe('PplmForm1Component', () => {
  let component: PplmForm1Component;
  let fixture: ComponentFixture<PplmForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PplmForm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PplmForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
