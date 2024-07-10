import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RrhhPopupMotivoPage } from './rrhh-popup-motivo.page';

describe('RrhhPopupMotivoPage', () => {
  let component: RrhhPopupMotivoPage;
  let fixture: ComponentFixture<RrhhPopupMotivoPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(RrhhPopupMotivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
