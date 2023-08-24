import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel3Component } from './panel3.component';

describe('Panel3Component', () => {
  let component: Panel3Component;
  let fixture: ComponentFixture<Panel3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Panel3Component]
    });
    fixture = TestBed.createComponent(Panel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
