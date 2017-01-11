/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IOComponent } from './io.component';

describe('IOComponent', () => {
  let component: IOComponent;
  let fixture: ComponentFixture<IOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
