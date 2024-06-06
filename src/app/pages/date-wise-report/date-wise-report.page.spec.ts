import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateWiseReportPage } from './date-wise-report.page';

describe('DateWiseReportPage', () => {
  let component: DateWiseReportPage;
  let fixture: ComponentFixture<DateWiseReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DateWiseReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
