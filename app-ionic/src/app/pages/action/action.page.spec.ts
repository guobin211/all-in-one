import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPage } from './action.page';

describe('ActionPage', () => {
  let component: ActionPage;
  let fixture: ComponentFixture<ActionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
