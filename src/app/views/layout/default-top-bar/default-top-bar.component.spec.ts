import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { By } from '@angular/platform-browser';
import { DefaultTopBarComponent } from './default-top-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('DefaultTopBarComponent', () => {
  let component: DefaultTopBarComponent;
  let fixture: ComponentFixture<DefaultTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultTopBarComponent ],
      imports: [AppRoutingModule, FontAwesomeModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
