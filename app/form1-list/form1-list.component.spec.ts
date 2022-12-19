import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form1ListComponent } from './form1-list.component';

describe('Form1ListComponent', () => {
  let component: Form1ListComponent;
  let fixture: ComponentFixture<Form1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form1ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
