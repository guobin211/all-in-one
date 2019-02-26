import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgePage } from './badge.page';

describe('BadgePage', () => {
  let component: BadgePage;
  let fixture: ComponentFixture<BadgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
