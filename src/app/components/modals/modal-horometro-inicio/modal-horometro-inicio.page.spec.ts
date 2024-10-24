import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ModalHorometroInicioPage } from './modal-horometro-inicio.page';

describe('ModalHorometroInicioPage', () => {
  let component: ModalHorometroInicioPage;
  let fixture: ComponentFixture<ModalHorometroInicioPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ModalHorometroInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
