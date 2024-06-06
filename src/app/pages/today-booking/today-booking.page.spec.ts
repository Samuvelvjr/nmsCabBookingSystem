import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodayBookingPage } from './today-booking.page';

describe('TodayBookingPage', () => {
  let component: TodayBookingPage;
  let fixture: ComponentFixture<TodayBookingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
