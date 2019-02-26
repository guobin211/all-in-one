import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsPage } from './icons.page';

describe('IconsPage', () => {
  let component: IconsPage;
  let fixture: ComponentFixture<IconsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
