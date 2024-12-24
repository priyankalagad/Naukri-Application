import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindemailComponent } from './findemail.component';

describe('FindemailComponent', () => {
  let component: FindemailComponent;
  let fixture: ComponentFixture<FindemailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindemailComponent]
    });
    fixture = TestBed.createComponent(FindemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
