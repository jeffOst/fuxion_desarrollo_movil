import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RrhhPopupServiciosPage } from './rrhh-popup-servicios.page';

describe('RrhhPopupServiciosPage', () => {
  let component: RrhhPopupServiciosPage;
  let fixture: ComponentFixture<RrhhPopupServiciosPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(RrhhPopupServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
