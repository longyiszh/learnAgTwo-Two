/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DBind404Component } from './d-bind404.component';

describe('DBind404Component', () => {
  let component: DBind404Component;
  let fixture: ComponentFixture<DBind404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DBind404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DBind404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
