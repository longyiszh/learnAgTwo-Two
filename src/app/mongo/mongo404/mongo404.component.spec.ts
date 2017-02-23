/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mongo404Component } from './mongo404.component';

describe('Mongo404Component', () => {
  let component: Mongo404Component;
  let fixture: ComponentFixture<Mongo404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mongo404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mongo404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
