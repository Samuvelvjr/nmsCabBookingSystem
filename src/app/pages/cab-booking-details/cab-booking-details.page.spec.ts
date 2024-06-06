import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CabBookingDetailsPage } from './cab-booking-details.page';

describe('CabBookingDetailsPage', () => {
  let component: CabBookingDetailsPage;
  let fixture: ComponentFixture<CabBookingDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CabBookingDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
