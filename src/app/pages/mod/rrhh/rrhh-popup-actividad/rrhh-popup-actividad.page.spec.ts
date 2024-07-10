import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RrhhPopupActividadPage } from './rrhh-popup-actividad.page';

describe('RrhhPopupActividadPage', () => {
  let component: RrhhPopupActividadPage;
  let fixture: ComponentFixture<RrhhPopupActividadPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(RrhhPopupActividadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
