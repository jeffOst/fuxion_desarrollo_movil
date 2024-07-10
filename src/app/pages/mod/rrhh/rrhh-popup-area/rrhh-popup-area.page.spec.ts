import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RrhhPopupAreaPage } from './rrhh-popup-area.page';

describe('RrhhPopupAreaPage', () => {
  let component: RrhhPopupAreaPage;
  let fixture: ComponentFixture<RrhhPopupAreaPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(RrhhPopupAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
