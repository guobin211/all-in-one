import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntvPage } from './antv.page';

describe('AntvPage', () => {
  let component: AntvPage;
  let fixture: ComponentFixture<AntvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
