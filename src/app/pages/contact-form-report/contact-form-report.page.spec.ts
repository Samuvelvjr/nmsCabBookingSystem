import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactFormReportPage } from './contact-form-report.page';

describe('ContactFormReportPage', () => {
  let component: ContactFormReportPage;
  let fixture: ComponentFixture<ContactFormReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
