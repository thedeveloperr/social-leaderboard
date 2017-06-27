/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LbTileItemComponent } from './lb-tile-item.component';

describe('LbTileItemComponent', () => {
  let component: LbTileItemComponent;
  let fixture: ComponentFixture<LbTileItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbTileItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbTileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});