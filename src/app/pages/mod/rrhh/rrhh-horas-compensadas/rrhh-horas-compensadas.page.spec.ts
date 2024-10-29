import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RrhhHorasCompensadasPage } from './rrhh-horas-compensadas.page';

describe('RrhhHorasCompensadasPage', () => {
  let component: RrhhHorasCompensadasPage;
  let fixture: ComponentFixture<RrhhHorasCompensadasPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(RrhhHorasCompensadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
