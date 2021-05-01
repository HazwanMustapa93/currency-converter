/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AppRoutingModule } from './../../../app-routing.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { DefaultFooterComponent } from './../default-footer/default-footer.component';
import { DefaultLayoutComponent } from './default-layout.component';
import { DefaultTopBarComponent } from './../default-top-bar/default-top-bar.component';

describe('DefaultLayoutComponent', () => {
  let component: DefaultLayoutComponent;
  let fixture: ComponentFixture<DefaultLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultLayoutComponent, DefaultTopBarComponent, DefaultFooterComponent ],
      imports: [AppRoutingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
