/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LbHeroItemComponent } from './lb-hero-item.component';

describe('LbHeroItemComponent', () => {
  let component: LbHeroItemComponent;
  let fixture: ComponentFixture<LbHeroItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbHeroItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbHeroItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});