import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxPage } from './checkbox.page';

describe('CheckboxPage', () => {
  let component: CheckboxPage;
  let fixture: ComponentFixture<CheckboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
