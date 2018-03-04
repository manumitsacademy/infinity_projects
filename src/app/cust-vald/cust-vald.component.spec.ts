import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustValdComponent } from './cust-vald.component';

describe('CustValdComponent', () => {
  let component: CustValdComponent;
  let fixture: ComponentFixture<CustValdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustValdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustValdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
