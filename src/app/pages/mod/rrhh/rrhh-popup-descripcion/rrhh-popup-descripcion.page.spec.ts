import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RrhhPopupDescripcionPage } from './rrhh-popup-descripcion.page';

describe('RrhhPopupDescripcionPage', () => {
  let component: RrhhPopupDescripcionPage;
  let fixture: ComponentFixture<RrhhPopupDescripcionPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(RrhhPopupDescripcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
