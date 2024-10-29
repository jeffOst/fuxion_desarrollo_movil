import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RrhhListHorasCompensadasPage } from './rrhh-list-horas-compensadas.page';

describe('RrhhListHorasCompensadasPage', () => {
  let component: RrhhListHorasCompensadasPage;
  let fixture: ComponentFixture<RrhhListHorasCompensadasPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(RrhhListHorasCompensadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
