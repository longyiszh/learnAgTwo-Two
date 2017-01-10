/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DBindIndexComponent } from './d-bind-index.component';

describe('DBindIndexComponent', () => {
  let component: DBindIndexComponent;
  let fixture: ComponentFixture<DBindIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DBindIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DBindIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
