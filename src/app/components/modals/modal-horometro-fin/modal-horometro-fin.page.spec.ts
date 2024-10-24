import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ModalHorometroFinPage } from './modal-horometro-fin.page';

describe('ModalHorometroFinPage', () => {
  let component: ModalHorometroFinPage;
  let fixture: ComponentFixture<ModalHorometroFinPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ModalHorometroFinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
