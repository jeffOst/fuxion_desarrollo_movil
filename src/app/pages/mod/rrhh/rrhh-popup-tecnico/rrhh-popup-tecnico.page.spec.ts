import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RrhhPopupTecnicoPage } from './rrhh-popup-tecnico.page';

describe('RrhhPopupTecnicoPage', () => {
  let component: RrhhPopupTecnicoPage;
  let fixture: ComponentFixture<RrhhPopupTecnicoPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(RrhhPopupTecnicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
