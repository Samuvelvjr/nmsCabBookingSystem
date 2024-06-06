import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewFormReportPage } from './review-form-report.page';

describe('ReviewFormReportPage', () => {
  let component: ReviewFormReportPage;
  let fixture: ComponentFixture<ReviewFormReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewFormReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
