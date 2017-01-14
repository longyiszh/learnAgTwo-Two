/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pipe404Component } from './pipe404.component';

describe('Pipe404Component', () => {
  let component: Pipe404Component;
  let fixture: ComponentFixture<Pipe404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pipe404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pipe404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
